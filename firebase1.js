import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBaO33fRMPJP0sLON2F0DOGgfDx76CA86Y",
  authDomain: "sports-buddy-6fc4a.firebaseapp.com",
  projectId: "sports-buddy-6fc4a",
  storageBucket: "sports-buddy-6fc4a.firebasestorage.app",
  messagingSenderId: "238525824315",
  appId: "1:238525824315:web:d1b8966094344324744b1e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
