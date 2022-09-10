// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCgd6xRgYxPeeFyCTNaxWtBqTS0Yn_0-50",
  authDomain: "hurairahrealestates127.firebaseapp.com",
  projectId: "hurairahrealestates127",
  storageBucket: "hurairahrealestates127.appspot.com",
  messagingSenderId: "249598433131",
  appId: "1:249598433131:web:ec0d5ef7c8ceba43b7de2e",
  measurementId: "G-2VGHCXKE9D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
