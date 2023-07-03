import firebase from "firebase/compat/app"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9W8M8-MdOsNtjT5zlEIT_vB6TLPydXW0",
  authDomain: "react-auth-a0216.firebaseapp.com",
  projectId: "react-auth-a0216",
  storageBucket: "react-auth-a0216.appspot.com",
  messagingSenderId: "92825612211",
  appId: "1:92825612211:web:4468c8958354f5d7f2e5c6",
  measurementId: "G-H128ENQQ82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const imageStore = getStorage(app)
export const db = getFirestore(app);
export default firebase