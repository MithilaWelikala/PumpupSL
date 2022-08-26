// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCeIiuAFPu57rpnPrNary6SNOUdq_wJxNY",
  authDomain: "pumpupsl-bb904.firebaseapp.com",
  projectId: "pumpupsl-bb904",
  storageBucket: "pumpupsl-bb904.appspot.com",
  messagingSenderId: "334338542592",
  appId: "1:334338542592:web:02929839e8d65e3bba5ce5",
  measurementId: "G-EF45B8NYW0"
};

initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();