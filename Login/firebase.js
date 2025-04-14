import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAinMYJgq6-bkne-YmjBvaleKRxFdt5aOc",
    authDomain: "loginpage-9166a.firebaseapp.com",
    projectId: "loginpage-9166a",
    storageBucket: "loginpage-9166a.firebasestorage.app",
    messagingSenderId: "554811256413",
    appId: "1:554811256413:web:3118facbab6b98bf6827b4",
    measurementId: "G-WX2FD48TM9"
  };
export const app = initializeApp(firebaseConfig);
export   const auth = getAuth(app);