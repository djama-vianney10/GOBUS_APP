import axios from "axios";
import { auth } from "../lib/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import type { LoginType, RoleType } from "../types";
import type { NavigateFunction } from "react-router-dom";
import { ToastError } from "./ToastMessage";

export const SubmitLogin = async (
    e: React.FormEvent<HTMLFormElement>,
    form: LoginType,
    navigate: NavigateFunction,
    verifierRole: RoleType // Pour vérifier que c'est bien le bon type de compte
) => {
    try {
        e.preventDefault();

        const { email, password } = form;

        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

         const req = await axios.get(`http://localhost:3000/users?uid=${user.uid}`);

         if (req.data.length === 0) {
            alert("Utilisateur non trouvé dans la base de données");
            await auth.signOut();
            return;
        }

        const userData = req.data[0];
        const userRole = userData.role;

        // Vérifier que le role correspond
        if (userRole !== verifierRole) {
            ToastError(`Ce compte est un compte ${userData.role}. Veuillez utiliser la page appropriée.`);
            await auth.signOut();
            return;
        }

        alert("Connexion réussie !");

        // Sauvegarder les infos utilisateur dans localStorage (optionnel)
        localStorage.setItem("User", JSON.stringify({
            uid: userData.uid,
            name: userData.name,
            role: userData.role
        }));

        if (userRole === "client") {
            navigate("/dashClient");
        } else if (userRole === "agence") {
            navigate("/dashAgence");
        }

    } catch (error) {
        console.error("Erreur lors de la connexion:", error);
    }
};