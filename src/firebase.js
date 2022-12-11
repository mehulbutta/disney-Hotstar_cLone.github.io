import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyBKdhrFKQz1A8SA-DK_haL2CVdXfQhhhZA",
  authDomain: "disney-clone-65d5e.firebaseapp.com",
  projectId: "disney-clone-65d5e",
  storageBucket: "disney-clone-65d5e.appspot.com",
  messagingSenderId: "160819277343",
  appId: "1:160819277343:web:112fb09fa6713f14aa2f2a",
  measurementId: "G-69LL156BWE"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;
