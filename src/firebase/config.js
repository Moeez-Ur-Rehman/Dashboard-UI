// Import the functions you need from the SDKs you need
import { initializeApp, getApps,getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth,GoogleAuthProvider } from 'firebase/auth'; 
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8G--cmxfeZx5l3k-RrO3AGFAL_fsMY_Y",
  authDomain: "dashboard-ui-63a6f.firebaseapp.com",
  projectId: "dashboard-ui-63a6f",
  storageBucket: "dashboard-ui-63a6f.appspot.com",
  messagingSenderId: "769921859936",
  appId: "1:769921859936:web:04bea3696de947c418de05",
  measurementId: "G-F49T7TH5RW"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const storage = getStorage(app, "dashboard-ui-63a6f.appspot.com");
const googleProvider = new GoogleAuthProvider();
export { auth,googleProvider,storage };
export const db = getFirestore(app);