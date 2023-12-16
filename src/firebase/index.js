import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyB-PZ1vyIiiWAjv24C5GQH7GJKMQUfGq08",
  authDomain: "todo-7fdcf.firebaseapp.com",
  projectId: "todo-7fdcf",
  storageBucket: "todo-7fdcf.appspot.com",
  messagingSenderId: "488073968707",
  appId: "1:488073968707:web:d93bf19041429a825de8f6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;