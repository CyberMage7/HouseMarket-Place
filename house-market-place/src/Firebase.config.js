// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB2XkjHOeSvaIjyKqqEobUdfJbwvSxgA1E",
  authDomain: "house-market-place-75a66.firebaseapp.com",
  projectId: "house-market-place-75a66",
  storageBucket: "house-market-place-75a66.appspot.com",
  messagingSenderId: "889110708910",
  appId: "1:889110708910:web:268a9f661cb58fb39f633f",
  measurementId: "G-1FMJE8GYKE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();