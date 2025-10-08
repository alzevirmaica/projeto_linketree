import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCo76WdKxnHX-WqidAnXBXQRQP-QVdOSAc",
  authDomain: "reactlinks-2cf4a.firebaseapp.com",
  projectId: "reactlinks-2cf4a",
  storageBucket: "reactlinks-2cf4a.firebasestorage.app",
  messagingSenderId: "725796603763",
  appId: "1:725796603763:web:fbf013e4130cc709fde706",
  measurementId: "G-05V3BGS8HP",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
