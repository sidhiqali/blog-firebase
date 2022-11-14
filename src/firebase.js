// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getStorage}  from "firebase/storage"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTLvECEtfw3xo7aeILjOcpipeA2nAZdSU",
  authDomain: "fir-blog-504c3.firebaseapp.com",
  projectId: "fir-blog-504c3",
  storageBucket: "fir-blog-504c3.appspot.com",
  messagingSenderId: "657392647360",
  appId: "1:657392647360:web:7549b236980617d5f58125"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const storage = getStorage(app)
const  db = getFirestore(app)

export {auth,db,storage}