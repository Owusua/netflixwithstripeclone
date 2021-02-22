import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAon4zwli8CHjI0iVTcRb7PUHnfliar6aA",
  authDomain: "newnetflixclone.firebaseapp.com",
  projectId: "newnetflixclone",
  storageBucket: "newnetflixclone.appspot.com",
  messagingSenderId: "330357266932",
  appId: "1:330357266932:web:8d5f4ff9aafd27005981a1",
  measurementId: "G-HC3R8L41X3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
