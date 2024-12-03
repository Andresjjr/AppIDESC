import { useEffect } from "react";
import { getToken } from "firebase/messaging";
import { messaging } from "@/lib/firebase";

const requestPermission = async () => {
  try {
    if (typeof window !== "undefined" && "Notification" in window) {
      const token = await getToken(messaging, { vapidKey: "BBWBhzqDe72Nh1muQHHO_ReTID0Iqipa3WeB5XjxOrK26a-qu0o3y7SjgYf6ykSrBAbcLdcKOCwE1imHShMdI3M" });
      if (token) {
        console.log("FCM Token:", token);
        // Guarda el token en tu base de datos para enviar notificaciones más tarde
      } else {
        console.log("No registration token available. Request permission to generate one.");
      }
    } else {
      console.log("Este navegador no soporta las APIs necesarias para Firebase Messaging.");
    }
  } catch (error) {
    console.error("An error occurred while retrieving token. ", error);
  }
};

useEffect(() => {
  requestPermission();
}, []);