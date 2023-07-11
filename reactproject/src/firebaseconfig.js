// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// API's

const firebaseConfig = {
    apiKey: "AIzaSyDjPdPFq1VYRMFUiJWDtPem-j4Ns_eCCPI",
    authDomain: "blogproject-7082e.firebaseapp.com",
    projectId: "blogproject-7082e",
    storageBucket: "blogproject-7082e.appspot.com",
    messagingSenderId: "1014776674789",
    appId: "1:1014776674789:web:f652593dde805ae996d70c"
  };
// Initialize Firebase
// connections set 
// why is app sent as parameter in this
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// how to get nameof the user who just logged with google 
//google gives the info when you log in the var auth being created here
// will e populated with information about
//user and user like google acc
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();


