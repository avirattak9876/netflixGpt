// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ6LvqvCOsiT29BHd5P_GgonOHQP8N7sI",
  authDomain: "netflixgpt-22741.firebaseapp.com",
  projectId: "netflixgpt-22741",
  storageBucket: "netflixgpt-22741.appspot.com",
  messagingSenderId: "948766650332",
  appId: "1:948766650332:web:754824150aa2bb61b2e919",
  measurementId: "G-9FYZHCF8SS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();