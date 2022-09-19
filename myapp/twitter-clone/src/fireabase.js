import {
  initializeApp
} from "firebase/app";
import {
  getFirestore
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWsQfcrGmm9Wk1RkE7WP6KZvJCqL4J6bE",
  authDomain: "twitter-clone-3ed6c.firebaseapp.com",
  projectId: "twitter-clone-3ed6c",
  storageBucket: "twitter-clone-3ed6c.appspot.com",
  messagingSenderId: "125084925517",
  appId: "1:125084925517:web:e514b7ccad4c193e8ce604"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;