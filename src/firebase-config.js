import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

// Ваш конфігураційний об'єкт Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDPJUBvk9ELgaSm9GfXlnEPkxTmy4EYNY0",
  authDomain: "dessert-shop-81c1b.firebaseapp.com",
  projectId: "dessert-shop-81c1b",
  storageBucket: "dessert-shop-81c1b.firebasestorage.app",
  messagingSenderId: "244826996457",
  appId: "1:244826996457:web:9d3b0c3c4d188b00f7ba78"
};

// Ініціалізація Firebase
const app = initializeApp(firebaseConfig); // Ініціалізація Firebase App
const db = getFirestore(app); // Отримання Firestore

export { db };
