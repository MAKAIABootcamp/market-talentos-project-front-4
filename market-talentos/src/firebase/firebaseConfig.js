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
  apiKey: "AIzaSyALNNG-zuo6Qce6rQvBND3aksoCEZe5eDc",
  authDomain: "market-place-talentos.firebaseapp.com",
  projectId: "market-place-talentos",
  storageBucket: "market-place-talentos.appspot.com",
  messagingSenderId: "784638244005",
  appId: "1:784638244005:web:c576a336823c28e24a494c"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();
export const dataBase= getFirestore(app)