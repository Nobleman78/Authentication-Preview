// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAslmi77xPHNphb8RKCykEmc_JSrs3NP9I",
  authDomain: "auth-recap-29e3f.firebaseapp.com",
  projectId: "auth-recap-29e3f",
  storageBucket: "auth-recap-29e3f.firebasestorage.app",
  messagingSenderId: "1051666203812",
  appId: "1:1051666203812:web:1f4ac3854ac2df10ff1231"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
