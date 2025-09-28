import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_API_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_API_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_API_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_API_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_API_MEASUREMENT_ID
}

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, analytics, db, storage, googleProvider, signInWithPopup, signInWithEmailAndPassword };