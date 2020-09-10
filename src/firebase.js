import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCzLHluQXl__dChkTd0BF6WhaFgGD2jbpM",
    authDomain: "share-exercise-app.firebaseapp.com",
    databaseURL: "https://share-exercise-app.firebaseio.com",
    projectId: "share-exercise-app",
    storageBucket: "share-exercise-app.appspot.com",
    messagingSenderId: "701871768428",
    appId: "1:701871768428:web:b0e6c06c75112d9000e949",
    measurementId: "G-N22FVLZDVV"

    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_DATABASE_URL,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const db = firebase.firestore();
export const storage = firebase.storage();
export default firebase;