import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBog0VuKKgri541QXYN82RPT7gsMaz9_Zc",
  authDomain: "clone-6a59c.firebaseapp.com",
  projectId: "clone-6a59c",
  storageBucket: "clone-6a59c.appspot.com",
  messagingSenderId: "50409099078",
  appId: "1:50409099078:web:a2dc3ce290ecfad326df47",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
