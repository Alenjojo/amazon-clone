import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBCsfF_8Y8YetlXaV9Dx3T_wfTH0S9P49g",
    authDomain: "clone-f15f1.firebaseapp.com",
    projectId: "clone-f15f1",
    storageBucket: "clone-f15f1.appspot.com",
    messagingSenderId: "295577712497",
    appId: "1:295577712497:web:f682087712de75dee328d0",
    measurementId: "G-9NG7DES1FZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };