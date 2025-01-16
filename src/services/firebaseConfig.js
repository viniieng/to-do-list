import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATHfaVLRLKpnaZZXO7IbTj7KkU1Ju--Bw",
  authDomain: "projeto-clinicorp.firebaseapp.com",
  projectId: "projeto-clinicorp",
  storageBucket: "projeto-clinicorp.firebasestorage.app",
  messagingSenderId: "276267193630",
  appId: "1:276267193630:web:14088bd20362744bc2650f",
  measurementId: "G-10SRT7BC7C",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
