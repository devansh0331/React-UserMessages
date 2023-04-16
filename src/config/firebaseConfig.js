import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
// import { GoogleAuthProvider } from 'firebase/auth'
// import { initializeApp } from 'firebase-admin/app';


const firebaseConfig = {
  apiKey: "AIzaSyCdL0TboKPZADlXlgG_M1MdjYqVpEqKQI8",
  authDomain: "users-credentials-c8bbc.firebaseapp.com",
  projectId: "users-credentials-c8bbc",
  storageBucket: "users-credentials-c8bbc.appspot.com",
  messagingSenderId: "294311846721",
  appId: "1:294311846721:web:640d09bfb6dd3bca4737c0",
  measurementId: "G-6Y1FVPSHXX"
};
  

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()
//   export const googleauth = new GoogleAuthProvider();
  const fs = firebase.firestore()
  const storage = firebase.storage()

  export {auth , fs , storage}
