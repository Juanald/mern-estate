// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ba8f2.firebaseapp.com",
  projectId: "mern-estate-ba8f2",
  storageBucket: "mern-estate-ba8f2.appspot.com",
  messagingSenderId: "635722258800",
  appId: "1:635722258800:web:cf597c3dc6e35bf83757b5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
