// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCVx_g6utzYabJmKQsxFpJGW3CA2sEsG-E",
  authDomain: "firstfirebase-project-cb53c.firebaseapp.com",
  projectId: "firstfirebase-project-cb53c",
  storageBucket: "firstfirebase-project-cb53c.appspot.com",
  messagingSenderId: "890941911988",
  appId: "1:890941911988:web:aecd22f1f8a6564902b8e1",
  measurementId: "G-S09WWHT69T"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);