import { Navigate } from "react-router-dom";
import type { ProtectedRouteProps } from "../types";
import { ToastError } from "../controllers/ToastMessage";


export default function ProtectedRoute({ children, role }: ProtectedRouteProps) {
  const user = JSON.parse(localStorage.getItem("User") || "null");

  if (!user) {
    return <Navigate to="/" />; // non connecté → redirection accueil
  }

  if (user.role !== role) {
    ToastError(`Accès refusé pour votre rôle : ${user.role}`)
    return <Navigate to="/" />; // rôle incorrect → redirection accueil
  }

  return children;
}
