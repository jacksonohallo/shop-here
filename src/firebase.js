import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({

  apiKey: "AIzaSyATkJ6YkNQSU9EwP12omlHYhZbo1qtAEqI",
  authDomain: "shop-yangu-c81c9.firebaseapp.com",
  projectId: "shop-yangu-c81c9",
  storageBucket: "shop-yangu-c81c9.appspot.com",
  messagingSenderId: "911780913595",
  appId: "1:911780913595:web:21b340536adea29089649e",
  measurementId: "G-E4CQ3V4XFB"

})


const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}