// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAel1VAs9LEpa0VYuTk5fn6_AZHbla1MTs",
  authDomain: "registration-form-db57e.firebaseapp.com",
  databaseURL: "https://registration-form-db57e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "registration-form-db57e",
  storageBucket: "registration-form-db57e.appspot.com",
  messagingSenderId: "297783820513",
  appId: "1:297783820513:web:317e97cb419d906da3b7a0",
  measurementId: "G-E6Y03B4DEC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);