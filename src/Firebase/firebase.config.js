// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWNWEGFaQRmaMXfF_liL8sRABXy4HWGFo",
  authDomain: "food-auth-ca6b3.firebaseapp.com",
  projectId: "food-auth-ca6b3",
  storageBucket: "food-auth-ca6b3.appspot.com",
  messagingSenderId: "993499981509",
  appId: "1:993499981509:web:eb35b1445c6facbefd72ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;