import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

 
export const firebaseConfig = {
  apiKey: "AIzaSyBzCOopYcvlMju_cBwc2ENPSSim6wYB9Ag",
  authDomain: "ea-store-fa5cb.firebaseapp.com",
  databaseURL: "https://ea-store-fa5cb-default-rtdb.firebaseio.com",
  projectId: "ea-store-fa5cb",
  storageBucket: "ea-store-fa5cb.firebasestorage.app",
  messagingSenderId: "209664888387",
  appId: "1:209664888387:web:d7ba439f5e5fea92cd4ef6",
  measurementId: "G-YMQQH1LBVJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);