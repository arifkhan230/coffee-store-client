// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDISTK4cDaULjsBjV3KarBXomA_xbg0g5c",
  authDomain: "coffee-store-ba645.firebaseapp.com",
  projectId: "coffee-store-ba645",
  storageBucket: "coffee-store-ba645.appspot.com",
  messagingSenderId: "919672592386",
  appId: "1:919672592386:web:4ff1ec935538b79cfd2f1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;