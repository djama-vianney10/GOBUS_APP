import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMYmh5ykrwm8I-T-kNC9KH7yTJeqcEZrM",
  authDomain: "busgo-8762b.firebaseapp.com",
  projectId: "busgo-8762b",
  storageBucket: "busgo-8762b.firebasestorage.app",
  messagingSenderId: "430233305597",
  appId: "1:430233305597:web:d47d114053930f237f5994"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, RecaptchaVerifier, signInWithPhoneNumber };