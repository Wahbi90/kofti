import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// firebase setup
 
  firebase.initializeApp ({
    apiKey: "AIzaSyAcXhQUy3IiFpfbNiQdwE0GwK7_IOMyGG8",
    authDomain: "freshky-66d96.firebaseapp.com",
    projectId: "freshky-66d96",
    storageBucket: "freshky-66d96.appspot.com",
    messagingSenderId: "919378996992",
    appId: "1:919378996992:web:575ad0209c5b2040474de5"
  });
  


  export default firebase;