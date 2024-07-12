// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  "write_your_apikey after making account on firebase",
  authDomain: "mern-estate-791d8.firebaseapp.com",
  projectId: "mern-estate-791d8",
  storageBucket: "mern-estate-791d8.appspot.com",
  messagingSenderId: "1039176650571",
  appId: "1:1039176650571:web:0ab679595d91f76134a2ce"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);