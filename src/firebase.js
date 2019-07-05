import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/database";
import "firebase/storage"

var firebaseConfig = {
  apiKey: "AIzaSyAoEZC1DkiphKNVYKQ-g2-1OkdAG86VV9M",
  authDomain: "react-chat-app-70c61.firebaseapp.com",
  databaseURL: "https://react-chat-app-70c61.firebaseio.com",
  projectId: "react-chat-app-70c61",
  storageBucket: "react-chat-app-70c61.appspot.com",
  messagingSenderId: "889628508539",
  appId: "1:889628508539:web:16bcdc85233ecbb2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;