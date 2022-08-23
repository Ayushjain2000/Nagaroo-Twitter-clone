import { initializeApp }  from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from"firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyB7GMQ6h2R2sFU0r5m9wFsjYrU3U6qucm8",
  authDomain: "twitter-clone-6be9b.firebaseapp.com",
  projectId: "twitter-clone-613c2",
  storageBucket: "twitter-clone-6be9b.appspot.com",
  messagingSenderId: "227408603090",
  appId: "1:227408603090:web:f0a4d80d9323b3a646ca0b",
  measurementId: "G-0XDPMPTCJR"
};
  const firebaseApp =initializeApp(firebaseConfig);
  const db=getFirestore(firebaseApp);
  const auth=getAuth();
  const provider=new GoogleAuthProvider();
  export {auth,provider};
  export default db;