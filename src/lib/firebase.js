import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBQeJAxlVe5MFuI4Oh1-5KuIKC0L7tK5pQ",
  authDomain: "idescapp-d229f.firebaseapp.com",
  projectId: "idescapp-d229f",
  storageBucket: "idescapp-d229f.appspot.com",
  messagingSenderId: "468369567352",
  appId: "1:468369567352:web:332e1846e4960915df478d",
  measurementId: "G-CMR5SKBWLY",
};

// Inicializa Firebase solo si no está ya inicializado
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const auth = getAuth(app);

// Inicializar `messaging` solo en el cliente
let messaging = null;
if (typeof window !== "undefined") {
  messaging = getMessaging(app);
}

export { app, db, auth, messaging };