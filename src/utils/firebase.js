import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDO2abk5FFZm6BLh1FEQVCSLWRAsryGC2A",
  authDomain: "netflixgpt-132cf.firebaseapp.com",
  projectId: "netflixgpt-132cf",
  storageBucket: "netflixgpt-132cf.firebasestorage.app",
  messagingSenderId: "1018363094464",
  appId: "1:1018363094464:web:ed8fdf9544aeec2e5e1425",
  measurementId: "G-F90JH9D9Q9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();