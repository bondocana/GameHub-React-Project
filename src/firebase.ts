// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrZtOgkRobYcJ84_Ya_dHsMO2KtHLWUnE",
  authDomain: "game-hub-734c8.firebaseapp.com",
  projectId: "game-hub-734c8",
  storageBucket: "game-hub-734c8.appspot.com",
  messagingSenderId: "680260955558",
  appId: "1:680260955558:web:ceec5e3857801974903367",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;
