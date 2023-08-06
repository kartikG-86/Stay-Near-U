// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBEoEJITZpTuwxZpYqjtZIUFEOhUP5tuQ4",
  authDomain: "staynearu-30f69.firebaseapp.com",
  projectId: "staynearu-30f69",
  storageBucket: "staynearu-30f69.appspot.com",
  messagingSenderId: "854637799921",
  appId: "1:854637799921:web:bd3545c155f34c6b2f3c50",
  measurementId: "G-NPQWBNQ8MV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();

export default db;
