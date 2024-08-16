// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfEPuXjwntHFPn23lTy6Fp3BW0-P7QCxM",
  authDomain: "auth-moha-milon-c7123.firebaseapp.com",
  projectId: "auth-moha-milon-c7123",
  storageBucket: "auth-moha-milon-c7123.appspot.com",
  messagingSenderId: "108636073857",
  appId: "1:108636073857:web:ee6000d58a87146207c280"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth