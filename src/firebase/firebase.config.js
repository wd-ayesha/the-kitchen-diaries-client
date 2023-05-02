// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqN9qMh2Mn4XAu1SpHiJgzTiH1Ggt6llU",
  authDomain: "the-kitchen-diaries-client.firebaseapp.com",
  projectId: "the-kitchen-diaries-client",
  storageBucket: "the-kitchen-diaries-client.appspot.com",
  messagingSenderId: "592777541125",
  appId: "1:592777541125:web:eed52ffd73bec446620e6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;