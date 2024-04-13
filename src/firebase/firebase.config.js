// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhYORw-ZIu_1xBH5kNTR4HDk8Fl3mQexg",
  authDomain: "b9a8-real-estate.firebaseapp.com",
  projectId: "b9a8-real-estate",
  storageBucket: "b9a8-real-estate.appspot.com",
  messagingSenderId: "780028252888",
  appId: "1:780028252888:web:4feefef3f6af20da57bdad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;