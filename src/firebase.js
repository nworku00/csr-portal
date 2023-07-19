// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsYlqv6aDd_TlGIt6QH7UyzWEJjalTWTI",
  authDomain: "csr-portal-fcb23.firebaseapp.com",
  projectId: "csr-portal-fcb23",
  storageBucket: "csr-portal-fcb23.appspot.com",
  messagingSenderId: "867751935389",
  appId: "1:867751935389:web:a55cf7191f1a490efdc374",
  measurementId: "G-427EB9W8D7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);