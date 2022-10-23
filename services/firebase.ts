// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";

// const firebaseConfig = {
//   apiKey: "AIzaSyC-CbmwOEEdVe8UIvFhuHHuha5Pzv3JdlQ",
//   authDomain: "miniboss-drive.firebaseapp.com",
//   databaseURL: "https://miniboss-drive-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "miniboss-drive",
//   storageBucket: "miniboss-drive.appspot.com",
//   messagingSenderId: "709930987816",
//   appId: "1:709930987816:web:9b96437d3fcb9f690ea01d"
// };

// const app = initializeApp(firebaseConfig);
// export const db = getDatabase(app);
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDFEW7jADpRvT8-0B19EmOpx5FlF3ls4io",
  authDomain: "miniboss-media.firebaseapp.com",
  projectId: "miniboss-media",
  storageBucket: "miniboss-media.appspot.com",
  messagingSenderId: "1028258219334",
  appId: "1:1028258219334:web:e87bb6523ff55f90905147",
  measurementId: "G-0RCX1QGS9T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);