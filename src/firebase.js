// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA8tO52WJDZfaCyxWBl2ODO9yiVOZ6b3YY",
    authDomain: "voguevista-d844c.firebaseapp.com",
    projectId: "voguevista-d844c",
    storageBucket: "voguevista-d844c.firebasestorage.app",
    messagingSenderId: "455587895499",
    appId: "1:455587895499:web:d321ff8fe2cebb9670e34e",
    measurementId: "G-P4L0TR9T2X"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
