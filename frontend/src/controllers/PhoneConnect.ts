import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import type { ConfirmationResult } from "firebase/auth";
import { auth } from "../lib/FirebaseConfig";
import axios from "axios";
import type { NavigateFunction } from "react-router-dom";
import { ToastError, ToastSuccess } from "./ToastMessage";
import type { RoleType } from "../types";

export const PhoneConnect = async (
  phoneNumber: string,
  _navigate: NavigateFunction,
  _userType: RoleType,
  onCodeSent: () => void
): Promise<ConfirmationResult | undefined> => {
  try {
    // Validation du numéro
    if (!phoneNumber || !phoneNumber.startsWith("+")) {
      ToastError("Veuillez entrer un numéro au format international (ex: +2250707070707)");
      return;
    }

    // Nettoyer l'ancien reCAPTCHA s'il existe
    const existingRecaptcha = (window as Window & { recaptchaVerifier?: RecaptchaVerifier }).recaptchaVerifier;
    if (existingRecaptcha) {
      try {
        existingRecaptcha.clear();
      } catch (error) {
        console.log("Erreur lors du nettoyage du reCAPTCHA:", error);
      }
    }

    // Créer le reCAPTCHA (Firebase exige ça)
    const recaptcha = new RecaptchaVerifier(auth, "recaptcha-container", {
      size: "invisible",
    });

    // Sauvegarder pour nettoyage futur
    (window as Window & { recaptchaVerifier?: RecaptchaVerifier }).recaptchaVerifier = recaptcha;

    // Envoi du code SMS
    const confirmation = await signInWithPhoneNumber(auth, phoneNumber, recaptcha);

    ToastSuccess("Code envoyé ! Vérifie ton téléphone.");

    // Appeler le callback pour passer à l'étape suivante
    onCodeSent();

    // Retourner la confirmation pour utilisation ultérieure
    return confirmation;

  } catch (error) {
    console.error("Erreur Firebase:", error);

    // Messages d'erreur plus précis selon le code d'erreur
    const firebaseError = error as { code?: string; message?: string };
    
    if (firebaseError.code === "auth/invalid-phone-number") {
      ToastError("Numéro de téléphone invalide");
    } else if (firebaseError.code === "auth/too-many-requests") {
      ToastError("Trop de tentatives. Réessaie plus tard.");
    } else if (firebaseError.code === "auth/operation-not-allowed") {
      ToastError("L'authentification par téléphone n'est pas activée pour cette région");
    } else if (firebaseError.code === "auth/quota-exceeded") {
      ToastError("Quota SMS dépassé. Contacte le support.");
    } else {
      ToastError("Erreur lors de l'envoi du code");
    }

    // Nettoyer en cas d'erreur
    const recaptcha = (window as Window & { recaptchaVerifier?: RecaptchaVerifier }).recaptchaVerifier;
    if (recaptcha) {
      try {
        recaptcha.clear();
      } catch (e) {
        console.log("Erreur lors du nettoyage:", e);
      }
      delete (window as Window & { recaptchaVerifier?: RecaptchaVerifier }).recaptchaVerifier;
    }

    return undefined;
  }
};


export const VerifyPhoneCode = async (
  confirmation: ConfirmationResult | null | undefined,
  code: string,
  navigate: NavigateFunction,
  userType: RoleType,
  userName?: string,
  userAdresse?: string
): Promise<void> => {
  try {
    // Validation du code
    if (!code || code.length !== 6) {
      ToastError("Le code doit contenir 6 chiffres");
      return;
    }

    if (!confirmation) {
      ToastError("Erreur: Aucune confirmation disponible. Redemande un code.");
      return;
    }

    // Vérifier le code SMS
    const result = await confirmation.confirm(code);
    const user = result.user;

    // Vérifier si l'utilisateur existe déjà dans la base de données
    const checkUser = await axios.get(`http://localhost:3000/users?uid=${user.uid}`);

    if (checkUser.data.length > 0) {
      // ✅ Utilisateur existant
      const userData = checkUser.data[0];

      // Vérifier que le rôle correspond
      if (userData.role !== userType) {
        ToastError(`Ce compte est un compte ${userData.role}. Utilise la bonne page.`);
        return;
      }

      // Stocker les données dans localStorage
      localStorage.setItem("User", JSON.stringify({
        uid: userData.uid,
        name: userData.name,
        role: userData.role,
        tel: userData.tel,
      }));

      ToastSuccess("Connexion réussie !");

      // Rediriger vers le tableau de bord approprié
      navigate(userType === "client" ? "/dashClient" : "/dashAgence");

    } else {
      // 🆕 Nouvel utilisateur → créer un compte
      const newUser = await axios.post("http://localhost:3000/users", {
        id: user.uid,
        uid: user.uid,
        name: userName || user.displayName || "Utilisateur",
        adresse: userAdresse || "",
        tel: user.phoneNumber,
        role: userType,
        createdAt: new Date().toISOString(),
      });

      if (newUser.status === 201) {
        // Stocker les données dans localStorage
        localStorage.setItem("User", JSON.stringify({
          uid: user.uid,
          name: userName || user.displayName || "Utilisateur",
          role: userType,
          tel: user.phoneNumber,
        }));

        ToastSuccess("Compte créé avec succès !");

        // Rediriger vers le tableau de bord approprié
        navigate(userType === "client" ? "/dashClient" : "/dashAgence");
      }
    }

    // Nettoyer le reCAPTCHA après succès
    const recaptcha = (window as Window & { recaptchaVerifier?: RecaptchaVerifier }).recaptchaVerifier;
    if (recaptcha) {
      try {
        recaptcha.clear();
      } catch (e) {
        console.log("Erreur lors du nettoyage:", e);
      }
      delete (window as Window & { recaptchaVerifier?: RecaptchaVerifier }).recaptchaVerifier;
    }

  } catch (error) {
    console.error("Erreur lors de la vérification:", error);

    // Messages d'erreur plus précis selon le code d'erreur
    const firebaseError = error as { code?: string; message?: string };
    
    if (firebaseError.code === "auth/invalid-verification-code") {
      ToastError("Code incorrect. Réessaie.");
    } else if (firebaseError.code === "auth/code-expired") {
      ToastError("Le code a expiré. Demande un nouveau code.");
    } else if (firebaseError.code === "auth/session-expired") {
      ToastError("Session expirée. Redemande un code.");
    } else if (firebaseError.message && firebaseError.message.includes("Network")) {
      ToastError("Erreur de connexion. Vérifie ton internet.");
    } else {
      ToastError("Erreur lors de la vérification du code");
    }

    // Nettoyer en cas d'erreur
    const recaptcha = (window as Window & { recaptchaVerifier?: RecaptchaVerifier }).recaptchaVerifier;
    if (recaptcha) {
      try {
        recaptcha.clear();
      } catch (e) {
        console.log("Erreur lors du nettoyage:", e);
      }
      delete (window as Window & { recaptchaVerifier?: RecaptchaVerifier }).recaptchaVerifier;
    }
  }
};