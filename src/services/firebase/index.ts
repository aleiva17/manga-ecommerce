import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7kOdyL_DEzMVwhYr5MO3STRXpByMx62k",
  authDomain: "manga-ecommerce.firebaseapp.com",
  projectId: "manga-ecommerce",
  storageBucket: "manga-ecommerce.appspot.com",
  messagingSenderId: "899746048932",
  appId: "1:899746048932:web:4da0563bbba4f54938ef31"
};

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app); 