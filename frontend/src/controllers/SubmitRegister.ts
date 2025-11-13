import type { NavigateFunction } from "react-router-dom";
import type { UserType } from "../types";
import axios from "axios"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/FirebaseConfig";

export const SubmitRegister = async (
    e: React.FormEvent<HTMLFormElement>,
    form: UserType ,
    navigate: NavigateFunction
) => {
    try {

        e.preventDefault()

        const {adresse, password, tel, role, name} = form

        const data = await createUserWithEmailAndPassword(auth, adresse!, password!)
        const user = data.user

        // Vérifier si l'utilisateur existe déjà dans JSON Server
        const checkUser = await axios.get(`http://localhost:3000/users?uid=${user.uid}`);

         if (checkUser.data.length > 0) {
            alert("Cet utilisateur existe déjà");
            return;
        }

        const req = await axios.post("http://localhost:3000/add-user", {
            id: user?.uid,
            name,
            tel, 
            adresse, 
            role,  
            password, 
            uid: user?.uid,
            createdAt: new Date().toISOString()
        })

        if(req?.status === 201){
            alert("Compte créée avec success")

            if(role === "client"){
                navigate("/dashClient")
            }else if(role === "agence"){
                navigate("/dashAgence")
            }else{
                alert("Erreur: Type de compte non reconnu")
            }
    }

        
    } catch (error) {
        console.log("Erreur lors de l'inscription: ", error)
    }
}