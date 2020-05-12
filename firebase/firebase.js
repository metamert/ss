import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBuenB-N-UmezFkYvL-QagfdfBXqxx5XhI",
    authDomain: "sepet-19c38.firebaseapp.com",
    databaseURL: "https://sepet-19c38.firebaseio.com",
    projectId: "sepet-19c38",
    storageBucket: "sepet-19c38.appspot.com",
    messagingSenderId: "409367037248",
    appId: "1:409367037248:web:bde086cdde5411289666a5",
    measurementId: "G-L36YECTPBE"
  };
  firebase.initializeApp(config);
  export const firestore = firebase.firestore();
  export default firebase