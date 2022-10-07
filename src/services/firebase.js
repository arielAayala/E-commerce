// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgRiQHBTodoQGT4E6HBVLv-P7k4dHnArg",
  authDomain: "e-commerce-integrador.firebaseapp.com",
  projectId: "e-commerce-integrador",
  storageBucket: "e-commerce-integrador.appspot.com",
  messagingSenderId: "794219416608",
  appId: "1:794219416608:web:28b7debf7de9a7b5090045",
  measurementId: "G-K9WCS3BBLR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
