import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getMessaging, getToken, onMessage } from "@firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBQeJAxlVe5MFuI4Oh1-5KuIKC0L7tK5pQ",
  authDomain: "idescapp-d229f.firebaseapp.com",
  projectId: "idescapp-d229f",
  storageBucket: "idescapp-d229f.appspot.com",
  messagingSenderId: "468369567352",
  appId: "1:468369567352:web:332e1846e4960915df478d",
  measurementId: "G-CMR5SKBWLY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
// const messaging = getMessaging(app);

export { app, db, auth };