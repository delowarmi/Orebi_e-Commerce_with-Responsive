// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {browserLocalPersistence, getAuth, setPersistence} from 'firebase/auth' //add korchi ami
// import{getFirestore} from 'firebase/firestore'//add krlam

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBkn6XlLfV_d4vWxt4LWcvz9VnmyQbCtA0",
//   authDomain: "orebi-e-commerce-d2773.firebaseapp.com",
//   projectId: "orebi-e-commerce-d2773",
//   storageBucket: "orebi-e-commerce-d2773.firebasestorage.app",
//   messagingSenderId: "704480216207",
//   appId: "1:704480216207:web:7de277c5d13ccc06ea1cfa",
// };


// const app = initializeApp(firebaseConfig);
// // export default firebaseConfig;
// export const auth=getAuth();/// add korlam eta
// export default app;
// export const db=getFirestore(app); //add korlm 

//এই টা ওপেন করলে ইউসার মেসেজ সেন্ড হয় //////////////

// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs
// firebase.js
// firebaseConfig.js
// firebaseConfig.js





// firebaseConfig.js  এই টা ওপেন করলে ড্যাশবোর্ড আসেবে ......।।

import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// import { getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBkn6XlLfV_d4vWxt4LWcvz9VnmyQbCtA0",
  apiKey: "AIzaSyBkn6XlLfV_d4vWxt4LWcvz9VnmyQbCtA0",
    authDomain: "orebi-e-commerce-d2773.firebaseapp.com",
    projectId: "orebi-e-commerce-d2773",
    storageBucket: "orebi-e-commerce-d2773.firebasestorage.app",
    messagingSenderId: "704480216207",
    appId: "1:704480216207:web:7de277c5d13ccc06ea1cfa",
  
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Local persistence enabled");
  })
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });
  export const storage = getFirestore(app);
  export const db =getDatabase(app);
  export default app;
  export { auth,};
