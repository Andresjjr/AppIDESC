// ESTE ARCHIVO CREA LA TAREA EN LA BASE DE DATOS Y SE INTENTA MANDAR LA NOTIFICACION PERO NO SE PUDO

import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export const addTaskAndNotify = async (task) => {
  try {
    // Agregar la tarea a Firestore
    const docRef = await addDoc(collection(db, "tareas"), task);
    console.log("Tarea añadida con ID:", docRef.id);

    // Obtener todos los tokens de los dispositivos registrados
    const tokensSnapshot = await getDocs(collection(db, "tokens"));
    const tokens = tokensSnapshot.docs.map(doc => doc.data().token);

    // Enviar notificación a todos los tokens
    const notificationPayload = {
      notification: {
        title: "Nueva Tarea Añadida",
        body: `Se ha añadido una nueva tarea: ${task.nombreProducto}`,
      },
    };

    tokens.forEach(token => {
      fetch("https://fcm.googleapis.com/fcm/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "key=YOUR_SERVER_KEY", // Reemplaza con tu Server Key
        },
        body: JSON.stringify({
          to: token,
          ...notificationPayload,
        }),
      })
      .then(response => response.json())
      .then(data => {
        console.log("Notificación enviada:", data);
      })
      .catch(error => {
        console.error("Error al enviar la notificación:", error);
      });
    });
  } catch (error) {
    console.error("Error al añadir la tarea o enviar la notificación:", error);
  }
};