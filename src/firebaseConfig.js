// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth' //add korchi ami
import{getFirestore} from 'firebase/firestore'//add krlam

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkn6XlLfV_d4vWxt4LWcvz9VnmyQbCtA0",
  authDomain: "orebi-e-commerce-d2773.firebaseapp.com",
  projectId: "orebi-e-commerce-d2773",
  storageBucket: "orebi-e-commerce-d2773.firebasestorage.app",
  messagingSenderId: "704480216207",
  appId: "1:704480216207:web:7de277c5d13ccc06ea1cfa",
};


const app = initializeApp(firebaseConfig);
// export default firebaseConfig;
export const auth=getAuth();/// add korlam eta
export default app;
export const db=getFirestore(app); //add korlm 

// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs
// firebase.js
// firebaseConfig.js
// firebaseConfig.js





