import axios from "axios";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import type { NavigateFunction } from "react-router-dom";
import { auth } from "../lib/FirebaseConfig";
import type { RoleType } from "../types";
import { ToastError } from "./ToastMessage";

// ✅ Fonction pour la connexion Google avec popup
export const GoogleConnect = async (navigate: NavigateFunction, userType: RoleType) => {
    try {
        const provider = new GoogleAuthProvider();
        
        // Connexion avec Google (popup)
        const result = await signInWithPopup(auth, provider);
        
        if (result && result.user) {
            const user = result.user;
            
            // ✅ Vérifier si l'utilisateur existe déjà dans JSON Server
            const checkUser = await axios.get(`http://localhost:3000/users?uid=${user.uid}`);
            
            if (checkUser.data.length > 0) {
                // Utilisateur existant - Connexion
                const userData = checkUser.data[0];
                
                // Vérifier que le role correspond
                if (userData.role !== userType) {
                    ToastError(`Ce compte est un compte ${userData.role}. Veuillez utiliser la page appropriée.`);
                    await auth.signOut();
                    return;
                }
                
                alert("Connexion réussie !");
                
                // Sauvegarder dans localStorage
                localStorage.setItem("User", JSON.stringify({
                    uid: userData.uid,
                    name: userData.name,
                    role: userData.role
                }));
                
                // Redirection
                if (userData.role === "client") {
                    navigate("/dashClient");
                } else if (userData.role === "agence") {
                    navigate("/dashAgence");
                }
                
            } else {
                // Nouvel utilisateur - Inscription
                const newUser = await axios.post("http://localhost:3000/users", {
                    id: user.uid,
                    uid: user.uid,
                    name: user.displayName,
                    adresse: user.email,
                    tel: "",
                    role: userType,
                    photoURL: user.photoURL,
                    createdAt: new Date().toISOString()
                });

                if (newUser?.status === 201) {
                    alert("Compte créé avec succès");
                    
                    // Sauvegarder dans localStorage
                    localStorage.setItem("User", JSON.stringify({
                        uid: user.uid,
                        name: user.displayName,
                        role: userType
                    }));
                    
                    // Redirection selon le role
                    if (userType === "client") {
                        navigate("/dashClient");
                    } else if (userType === "agence") {
                        navigate("/dashAgence");
                    }
                } else {
                    alert("Erreur lors de la création du compte");
                }
            }
        }

    } catch (error) {
        console.error("Erreur lors de la connexion Google:", error);
    }
};