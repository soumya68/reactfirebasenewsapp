import firebase from 'firebase'
import 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyC5TFFjrJKtXNPJowaTHMmt-igQtrrRPcU",
  authDomain: "myblog-9d554.firebaseapp.com",
  databaseURL: "https://myblog-9d554.firebaseio.com",
  projectId: "myblog-9d554",
  storageBucket: "myblog-9d554.appspot.com",
  messagingSenderId: "308358342961",
  appId: "1:308358342961:web:93efc290ba1f90afc8e810"
};
const fire = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export { fire, storage }