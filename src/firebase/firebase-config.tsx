// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFt2GBvuVGey15GYyxhzgWDo9qBzIIPqQ",
  authDomain: "camnect-caf15.firebaseapp.com",
  projectId: "camnect-caf15",
  storageBucket: "camnect-caf15.firebasestorage.app",
  messagingSenderId: "203816716824",
  appId: "1:203816716824:web:390a5f5e8406007f04d16d",
  measurementId: "G-3HS7MD5XKP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage (app);