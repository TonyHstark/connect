// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAK-2WxZLcMQa7OvHlP0AssSuAzvJyYNTQ",
    authDomain: "connect-d15c7.firebaseapp.com",
    projectId: "connect-d15c7",
    storageBucket: "connect-d15c7.appspot.com",
    messagingSenderId: "962957599016",
    appId: "1:962957599016:web:79018f7d74a5449586301d",
    measurementId: "G-X9QZV1P6CF"
  };

  const firebaseapp=initializeApp(firebaseConfig);
  const db = getFirestore(firebaseapp);
  const auth = getAuth();

  export {db,auth};


