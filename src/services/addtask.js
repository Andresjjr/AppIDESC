import { ref, set, push } from "firebase/database";
import { db } from "./firestore";

export const addTask = async (task) => {
  try {
    const tasksRef = ref(db, "tareas"); // Referencia a la tabla tareas
    const newTaskRef = push(tasksRef); // Crea un nuevo registro con un ID único
    await set(newTaskRef, task); // Añade la tarea a la base de datos

    console.log("Tarea añadida con ID:", newTaskRef.key);
  } catch (error) {
    console.error("Error al añadir la tarea:", error);
  }
};