// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getStorage}  from "firebase/storage"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsOrTLGYGd1g3t_VIYOb_UgVfzcfm1TyM",
  authDomain: "blog-firebase-5f763.firebaseapp.com",
  projectId: "blog-firebase-5f763",
  storageBucket: "blog-firebase-5f763.appspot.com",
  messagingSenderId: "282631747229",
  appId: "1:282631747229:web:0ebd38ae330d7880238674"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const storage = getStorage(app)
const  db = getFirestore(app)

export {auth,db,storage}