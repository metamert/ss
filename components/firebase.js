import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBElk6aXK6KR9lkgCDBvQ7bAHUrYAHmF4o",
    authDomain: "forandroid-e6862.firebaseapp.com",
    databaseURL: "https://forandroid-e6862.firebaseio.com",
    projectId: "forandroid-e6862",
    storageBucket: "forandroid-e6862.appspot.com",
    messagingSenderId: "360287495869",
    appId: "1:360287495869:web:2312db11276175c366f9d4",
    measurementId: "G-GLNL10P15K"
  };
  firebase.initializeApp(config);
  export const firestore = firebase.firestore();
  export default firebase