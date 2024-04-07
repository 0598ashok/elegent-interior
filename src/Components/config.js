// import {initializeApp} from 'firebase/app';
// import {getStorage} from 'firebase/storage'

// const firebaseConfig = {
//   apiKey: "AIzaSyDQj291GsZGf5vRSjhKBy0uCxKAvDSGl88",
//   authDomain: "elegant-interiors-6347b.firebaseapp.com",
//   projectId: "elegant-interiors-6347b",
//   storageBucket: "elegant-interiors-6347b.appspot.com",
//   messagingSenderId: "1036469382538",
//   appId: "1:1036469382538:web:105bd82f63016fcff3ac73"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
//   export const imageDB = getStorage(app);

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// import dotenv from "dotenv";

// dotenv.config();

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imageDB = getStorage(app);
