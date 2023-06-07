// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFGt0vkeSzYwsQkBtCshY_LFqxORbhSSM",
  authDomain: "munch-food-ef367.firebaseapp.com",
  projectId: "munch-food-ef367",
  storageBucket: "munch-food-ef367.appspot.com",
  messagingSenderId: "121906865276",
  appId: "1:121906865276:web:4986b2877d6321eed115f9",
  measurementId: "G-JF8JP1XESX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
