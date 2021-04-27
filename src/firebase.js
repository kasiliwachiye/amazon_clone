// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBuNGZY820YLjv_8qNJDT-tmGwFskWIVsQ",
    authDomain: "challenge-e122f.firebaseapp.com",
    projectId: "challenge-e122f",
    storageBucket: "challenge-e122f.appspot.com",
    messagingSenderId: "551634690588",
    appId: "1:551634690588:web:cb197afc5b1014a6ecf5d9",
    measurementId: "G-76TF825460"
  }; 

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};