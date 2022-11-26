   // Import the functions you need from the SDKs you need
   import {initializeApp} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
   import {
       getAuth,
       createUserWithEmailAndPassword,
       signInWithEmailAndPassword,
       signOut
   } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
   import {getDatabase, set, ref, update} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";


   // TODO: Add SDKs for Firebase products that you want to use
   // https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
 apiKey: "AIzaSyDA1XjvPrrZiMLhYRRV1Ar23p4SF2lJq9I",
 authDomain: "cpto-d7b0b.firebaseapp.com",
 projectId: "cpto-d7b0b",
 storageBucket: "cpto-d7b0b.appspot.com",
 messagingSenderId: "633926478402",
 appId: "1:633926478402:web:3e659a8d5f50793d299bdb",
 measurementId: "G-WNZKRQGELD"
};
   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   const auth = getAuth();
   const database = getDatabase(app);