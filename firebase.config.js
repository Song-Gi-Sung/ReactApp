import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyAZztooIedD7EMOnFFdbTPYYlMkD2J6640",
    authDomain: "capstone-store.firebaseapp.com",
    databaseURL: "https://capstone-store.firebaseio.com",
    projectId: "capstone-store",
    storageBucket: "capstone-store.appspot.com",
    messagingSenderId: "411583539900",
    appId: "1:411583539900:web:366aaa67fc57c44bad3eb9",
    measurementId: "G-MLB4LT99F5"
  };


firebase.initializeApp(firebaseConfig);

export default firebaseConfig