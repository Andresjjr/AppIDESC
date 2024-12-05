import { getToken } from "firebase/messaging";
import { messaging } from "@/lib/firebase";

export const requestPermission = async () => {
  try {
    const registration = await navigator.serviceWorker.ready;
    const token = await getToken(messaging, {
      vapidKey: "BBWBhzqDe72Nh1muQHHO_ReTID0Iqipa3WeB5XjxOrK26a-qu0o3y7SjgYf6ykSrBAbcLdcKOCwE1imHShMdI3M",
      serviceWorkerRegistration: registration,
    });
    if (token) {
      console.log("Token obtenido:", token);
      // Guarda el token en tu base de datos
    } else {
      console.error("No se obtuvo el token.");
    }
  } catch (error) {
    console.error("Error al obtener el token:", error);
  }
};