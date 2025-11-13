import type React from "react";

export type AgenceType = {
  id?: number;
  nom: string;
  image: string;
  description: string;
  horaires: string;
  color?: string;
}


export type UserType = {
  uid?: string;
  name: string;
  adresse: string; 
  tel: string,
  role: RoleType,
  password: string
}

export type RoleType = "client" | "agence"

export type LoginType =  {
    email: string;
    password: string;
}

export type ProtectedRouteProps = {
  children: React.ReactElement;
  role: string; // role attendu pour la page
};