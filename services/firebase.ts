import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFEW7jADpRvT8-0B19EmOpx5FlF3ls4io",
  authDomain: "miniboss-media.firebaseapp.com",
  projectId: "miniboss-media",
  storageBucket: "miniboss-media.appspot.com",
  messagingSenderId: "1028258219334",
  appId: "1:1028258219334:web:e87bb6523ff55f90905147",
  measurementId: "G-0RCX1QGS9T"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
