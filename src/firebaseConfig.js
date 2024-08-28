import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { getAuth } from 'firebase/auth';
import {getDatabase} from "firebase/database"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrCCQQjtyteSSCetcT_uKXaMpnanCUpHI",
  authDomain: "team-euphoria-1ff1d.firebaseapp.com",
  databaseURL: "https://team-euphoria-1ff1d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "team-euphoria-1ff1d",
  storageBucket: "team-euphoria-1ff1d.appspot.com",
  messagingSenderId: "708059937814",
  appId: "1:708059937814:web:7d95d1dc1120fa5b170937",
  measurementId: "G-0J24PXSVFR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); 
const rtdb = getDatabase(app);
export {auth,db,rtdb};