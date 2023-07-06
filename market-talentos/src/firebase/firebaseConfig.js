// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKlScJqh0l3MdqbfvQlTv7I4LmzUEuk90",
  authDomain: "marketplace-talents.firebaseapp.com",
  projectId: "marketplace-talents",
  storageBucket: "marketplace-talents.appspot.com",
  messagingSenderId: "258198592898",
  appId: "1:258198592898:web:b791c1da32f9c5f0e9839b",
  measurementId: "G-32TS1DFJWE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const dataBase = getFirestore(app);
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();