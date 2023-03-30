import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBWh0D9xxVdH2WmnUiK4FVRrZVVUe1wfws",
    authDomain: "linkedin-clone-c614b.firebaseapp.com",
    projectId: "linkedin-clone-c614b",
    storageBucket: "linkedin-clone-c614b.appspot.com",
    messagingSenderId: "339699928445",
    appId: "1:339699928445:web:3605610e6a0538df15d014"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { firebaseApp, db, auth };
