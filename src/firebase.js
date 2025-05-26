// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ✅ Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCtXInRoeRM6Y-VzcbKU0bolEKUmOdbuo",
  authDomain: "rental-app-d09ce.firebaseapp.com",
  projectId: "rental-app-d09ce",
  storageBucket: "rental-app-d09ce.appspot.com",
  messagingSenderId: "180754205384",
  appId: "1:180754205384:web:216e57cc834c7c4e21b3fd"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export auth and firestore instances
export const auth = getAuth(app);
export const db = getFirestore(app);
