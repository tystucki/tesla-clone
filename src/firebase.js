// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCffL9M47BBDZGc7vmtCXI2tFLgiQ_Kc1Q",
  authDomain: "tesla-clone-a625e.firebaseapp.com",
  projectId: "tesla-clone-a625e",
  storageBucket: "tesla-clone-a625e.appspot.com",
  messagingSenderId: "86341645831",
  appId: "1:86341645831:web:60849103b0c4672a73dca2",
  measurementId: "G-TJYCZXYQF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);