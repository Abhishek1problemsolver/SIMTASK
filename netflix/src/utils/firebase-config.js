import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB7xnPo3MwOUNXdWTNiVM30tRF7EXi99Zs",
  authDomain: "react-netflix-b2833.firebaseapp.com",
  projectId: "react-netflix-b2833",
  storageBucket: "react-netflix-b2833.appspot.com",
  messagingSenderId: "1027114651626",
  appId: "1:1027114651626:web:baabae4463fca0a191ec93",
  measurementId: "G-CXV21SFZ88"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db; 
