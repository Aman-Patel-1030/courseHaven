// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPeg8GadRJdJZ1AVTqxLC1T9-CncmG0yg",
  authDomain: "course-app-80da6.firebaseapp.com",
  projectId: "course-app-80da6",
  storageBucket: "course-app-80da6.firebasestorage.app",
  messagingSenderId: "624750496574",
  appId: "1:624750496574:web:3472433c80300d9219fa6f",
  measurementId: "G-QG25FHQ2WL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

