import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDyuLsP0UruFVVdTpk4jQRKJO5xtQi3NT0",
    authDomain: "olx-p-32ea4.firebaseapp.com",
    projectId: "olx-p-32ea4",
    storageBucket: "olx-p-32ea4.appspot.com",
    messagingSenderId: "904135096310",
    appId: "1:904135096310:web:aea5b0373bb217182239d7",
    measurementId: "G-DCNXWZ3VH3"
  };

  export default firebase.initializeApp(firebaseConfig) 