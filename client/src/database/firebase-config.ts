import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: 'AIzaSyA0xil3o9rm23A5sKEDCAFqzYR7T0XYqKs',
  authDomain: 'munch-food-app.firebaseapp.com',
  projectId: 'munch-food-app',
  storageBucket: 'munch-food-app.appspot.com',
  messagingSenderId: '395835089502',
  appId: '1:395835089502:web:ccac531f15db8ea9ce4acf',
  measurementId: 'G-NETY7ZYE73',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
