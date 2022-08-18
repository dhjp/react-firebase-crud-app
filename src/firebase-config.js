import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCnnddIJlBVk8bAxkULLQaQNA2aBilgdn4",
  authDomain: "system-of-medicine.firebaseapp.com",
  projectId: "system-of-medicine",
  storageBucket: "system-of-medicine.appspot.com",
  messagingSenderId: "791780435590",
  appId: "1:791780435590:web:fcef39d82f11f15a4c5307",
  measurementId: "G-690XXH2QPQ"
};




const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
