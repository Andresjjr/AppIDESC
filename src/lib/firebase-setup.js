"use client";

import { messaging } from "./firebase";
import { onMessage } from "firebase/messaging";

export function initializeFirebase() {
  if (typeof window !== 'undefined') {
    // Escucha mensajes en primer plano
    onMessage(messaging, (payload) => {
      console.log("Mensaje recibido en primer plano:", payload);
    });
  } else {
    console.log("Firebase Messaging no se puede inicializar en el servidor.");
  }
}

