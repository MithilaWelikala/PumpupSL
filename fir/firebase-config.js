// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "xxxxxxxxx",
  authDomain: "xxxxxxxx",
  projectId: "xxxxxxxxx",
  storageBucket: "xxxxx",
  messagingSenderId: "xxxxxxxxxxxxxxxx",
  appId: "xxxxxxxxxxxxxxxxxxxxx",
  measurementId: "xxxxxxxxxxxxxxxxxxxx"
};

initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
