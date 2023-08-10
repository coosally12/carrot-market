import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9WzFcUb8aDfLcvwi_3tPmpkCM6b_lcVk",
  authDomain: "carrot-market-e03a8.firebaseapp.com",
  databaseURL:
    "https://carrot-market-e03a8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "carrot-market-e03a8",
  storageBucket: "carrot-market-e03a8.appspot.com",
  messagingSenderId: "644020556899",
  appId: "1:644020556899:web:f094802b35584dbde95456",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth(app);
