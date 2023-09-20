// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwf77o4yee8DeedcXpK4z3O5Kh3C3qTCA",
  authDomain: "aryu-ecommerce.firebaseapp.com",
  projectId: "aryu-ecommerce",
  storageBucket: "aryu-ecommerce.appspot.com",
  messagingSenderId: "924887031043",
  appId: "1:924887031043:web:5176e8598f722108575d36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
