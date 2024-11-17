import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD8gS_1AigBc9Vb605mKwqjaax3OzF5tw4",
  authDomain: "portfolio-f64ef.firebaseapp.com",
  databaseURL: "https://portfolio-f64ef-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-f64ef",
  storageBucket: "portfolio-f64ef.firebasestorage.app",
  messagingSenderId: "973305275675",
  appId: "1:973305275675:web:a2bae482fae81e03351fbe",
  measurementId: "G-EB406TEL8M"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);