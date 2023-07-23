import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyCHmhwICUqprVWPeKFoOCF4gNzdXEtSbvY",
  authDomain: "movie-search-app-8db7e.firebaseapp.com",
  projectId: "movie-search-app-8db7e",
  storageBucket: "movie-search-app-8db7e.appspot.com",
  messagingSenderId: "1076890076943",
  appId: "1:1076890076943:web:d21810c13802aa1a32607a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);
export const db = getDatabase(app);
