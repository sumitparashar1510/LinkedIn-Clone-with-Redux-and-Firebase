import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyBWh0D9xxVdH2WmnUiK4FVRrZVVUe1wfws",
//     authDomain: "linkedin-clone-c614b.firebaseapp.com",
//     projectId: "linkedin-clone-c614b",
//     storageBucket: "linkedin-clone-c614b.appspot.com",
//     messagingSenderId: "339699928445",
//     appId: "1:339699928445:web:3605610e6a0538df15d014"
// };

const firebaseConfig = {
  apiKey: "AIzaSyClV1Nt7UO4XUX5j2uRLxMxTCSafV6s8iQ",
  authDomain: "linkedin-39103.firebaseapp.com",
  projectId: "linkedin-39103",
  storageBucket: "linkedin-39103.appspot.com",
  messagingSenderId: "503441163751",
  appId: "1:503441163751:web:dd4f675901ad1f9aa92942",
  measurementId: "G-CM6636X2JN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { firebaseApp, db, auth };


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyClV1Nt7UO4XUX5j2uRLxMxTCSafV6s8iQ",
//   authDomain: "linkedin-39103.firebaseapp.com",
//   projectId: "linkedin-39103",
//   storageBucket: "linkedin-39103.appspot.com",
//   messagingSenderId: "503441163751",
//   appId: "1:503441163751:web:dd4f675901ad1f9aa92942",
//   measurementId: "G-CM6636X2JN"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
