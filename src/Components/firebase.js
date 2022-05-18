import  'firebase/compat/auth';
import 'firebase/compat/firestore';
import  firebase from 'firebase/compat/app';
const firebaseConfig = {
    apiKey: "AIzaSyBnQdueV-GEZxjtuVRSs2-Mz-P1xrvG_Vc",
    authDomain: "clone-33368.firebaseapp.com",
    projectId: "clone-33368",
    storageBucket: "clone-33368.appspot.com",
    messagingSenderId: "715200645950",
    appId: "1:715200645950:web:b78d7f7c50adb9ea133a6f",
    measurementId: "G-GJG0BV5NRP"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {auth};