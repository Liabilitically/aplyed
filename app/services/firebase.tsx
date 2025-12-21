// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-XkVukMjnF7JV13m1-LtRAcXSrVpHMQc",
  authDomain: "aplyed-93834.firebaseapp.com",
  projectId: "aplyed-93834",
  storageBucket: "aplyed-93834.firebasestorage.app",
  messagingSenderId: "12331485378",
  appId: "1:12331485378:web:55c340bb2cf679b4f1535b",
  measurementId: "G-MQXRKTZPZ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);