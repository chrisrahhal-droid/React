import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "submitform-f75f3.firebaseapp.com",
  projectId: "submitform-f75f3",
  storageBucket: "submitform-f75f3.firebasestorage.app",
  messagingSenderId: "83227567160",
  appId: "1:83227567160:web:613230e0c10b8efc60f2cd"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
