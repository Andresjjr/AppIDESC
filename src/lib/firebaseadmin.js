import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";  // Importa los servicios necesarios

const firebaseConfig = {
  apiKey: "AIzaSyBQeJAxlVe5MFuI4Oh1-5KuIKC0L7tK5pQ",
  authDomain: "idescapp-d229f.firebaseapp.com",
  projectId: "idescapp-d229f",
  storageBucket: "idescapp-d229f.appspot.com",
  messagingSenderId: "468369567352",
  appId: "1:468369567352:web:332e1846e4960915df478d",
  measurementId: "G-CMR5SKBWLY",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Auth
export const auth = getAuth(app);

// Inicializar Analytics de forma segura
let analytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

// Configurar Firebase Messaging
const messaging = getMessaging(app);

// Obtener el token FCM del dispositivo
export const getFCMToken = async () => {
  try {
    const currentToken = await getToken(messaging, {
      vapidKey: 'YOUR_VAPID_KEY'  // Aquí debes colocar la clave VAPID que obtuviste en la configuración de Firebase.
    });

    if (currentToken) {
      console.log('FCM Token:', currentToken);
      // Aquí puedes enviar este token a tu servidor para almacenarlo y poder enviar notificaciones
    } else {
      console.log('No se pudo obtener el token FCM');
    }
  } catch (error) {
    console.error('Error obteniendo el token FCM:', error);
  }
};

// Manejar la recepción de mensajes cuando la app está en primer plano
onMessage(messaging, (payload) => {
  console.log('Mensaje recibido en primer plano:', payload);

});

export default app;

