// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLUGckGZu3fdCoiMbiSLizdq24007eRA8",
  authDomain: "rickyshop-1a65f.firebaseapp.com",
  projectId: "rickyshop-1a65f",
  storageBucket: "rickyshop-1a65f.appspot.com",
  messagingSenderId: "311553721125",
  appId: "1:311553721125:web:047f118b29f60591ce50cc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
