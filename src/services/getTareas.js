import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export const getTareas = async () => {
  try {
    const tareasRef = collection(db, "tareas");
    const querySnapshot = await getDocs(tareasRef);
    
    if (querySnapshot.empty) {
      console.log("No hay tareas en la colección.");
    } else {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    }
  } catch (error) {
    console.error("Error al conectar con Firestore:", error);
  }
};