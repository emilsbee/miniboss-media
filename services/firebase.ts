import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC-CbmwOEEdVe8UIvFhuHHuha5Pzv3JdlQ",
  authDomain: "miniboss-drive.firebaseapp.com",
  databaseURL: "https://miniboss-drive-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "miniboss-drive",
  storageBucket: "miniboss-drive.appspot.com",
  messagingSenderId: "709930987816",
  appId: "1:709930987816:web:9b96437d3fcb9f690ea01d"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);