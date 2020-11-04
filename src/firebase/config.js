import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAxsBmaih7GhkCe5lDA-HVTX1i5IQrroNc",
  authDomain: "siddhant-firegram.firebaseapp.com",
  databaseURL: "https://siddhant-firegram.firebaseio.com",
  projectId: "siddhant-firegram",
  storageBucket: "siddhant-firegram.appspot.com",
  messagingSenderId: "302748255218",
  appId: "1:302748255218:web:9145312a48f400e3e3e16b",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };