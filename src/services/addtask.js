import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export const addTask = async (task) => {
  try {
    // Verifica que db sea una instancia válida
    if (!db) {
      throw new Error("Firestore no está inicializado correctamente.");
    }

    // Agrega un nuevo documento a la colección "tareas"
    const docRef = await addDoc(collection(db, "tareas"), task);
    console.log("Tarea añadida con ID:", docRef.id);
  } catch (error) {
    console.error("Error al añadir la tarea:", error);
  }
};