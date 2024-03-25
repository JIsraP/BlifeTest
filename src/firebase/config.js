import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

// Web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMapol9hZVO1Vbgchsiuf9cgEKsu1SlFc",
    authDomain: "blife-5d621.firebaseapp.com",
    projectId: "blife-5d621",
    storageBucket: "blife-5d621.appspot.com",
    messagingSenderId: "968285895479",
    appId: "1:968285895479:web:0156a4777dfd95a52078b2",
    measurementId: "G-D1QE19PFRL"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);