import {initializeApp} from 'firebase/app';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDQj291GsZGf5vRSjhKBy0uCxKAvDSGl88",
  authDomain: "elegant-interiors-6347b.firebaseapp.com",
  projectId: "elegant-interiors-6347b",
  storageBucket: "elegant-interiors-6347b.appspot.com",
  messagingSenderId: "1036469382538",
  appId: "1:1036469382538:web:105bd82f63016fcff3ac73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  export const imageDB = getStorage(app);