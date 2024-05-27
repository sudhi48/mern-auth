// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mearn-auth-fc130.firebaseapp.com",
  projectId: "mearn-auth-fc130",
  storageBucket: "mearn-auth-fc130.appspot.com",
  messagingSenderId: "208686074519",
  appId: "1:208686074519:web:9e041e8e597694ba5d37d2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);