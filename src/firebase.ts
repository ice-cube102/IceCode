import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBa2WEVhEedmJzBNIOYl7xZKuqZVvIGxu4",
  authDomain: "icecode-70c41.firebaseapp.com",
  projectId: "icecode-70c41",
  storageBucket: "icecode-70c41.firebasestorage.app",
  messagingSenderId: "716071233911",
  appId: "1:716071233911:web:f6c38a8b2a04278b559972",
  measurementId: "G-EH5PF89JE1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export { signInWithPopup, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInAnonymously };
