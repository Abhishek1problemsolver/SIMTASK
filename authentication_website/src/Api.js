import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB9TYBKLnKro-eLw5SmdzI4aG90HMZWnUI",
    authDomain: "authentication-b7b6c.firebaseapp.com",
    projectId: "authentication-b7b6c",
    storageBucket: "authentication-b7b6c.appspot.com",
    messagingSenderId: "465926738973",
    appId: "1:465926738973:web:fab212f4e5f9308a2ba2f4",
    measurementId: "G-QKYGMC41H2"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db; 
