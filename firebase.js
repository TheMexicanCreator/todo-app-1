// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebase } from "@react-native-firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHcgGSqevWXbgEuoP4EAvPXcKgfzrc2yE",
  authDomain: "hausou-app.firebaseapp.com",
  projectId: "hausou-app",
  storageBucket: "hausou-app.appspot.com",
  messagingSenderId: "98368808581",
  appId: "1:98368808581:web:efaa785df833103c3c6bec",
  measurementId: "G-VNQBXBL3QY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = firebase.auth();

export { auth }