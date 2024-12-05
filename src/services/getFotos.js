import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";

export const getFotos = async () => {
  try {
    const fotosRef = collection(db, "fotos");
    const q = query(fotosRef, orderBy("timestamp", "desc")); // Ordena por timestamp en orden descendente
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      console.log("No hay fotos en la colección.");
      return []; // Retorna un arreglo vacío si no hay datos.
    } else {
      const fotos = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.imageUrl && data.timestamp) {
          fotos.push({ imageUrl: data.imageUrl, timestamp: data.timestamp.toDate().toLocaleString() }); // Guarda la URL y la fecha de subida.
        }
      });
      console.log("----------");
      console.log(fotos);
      console.log("----------");
      
      return fotos; // Retorna la lista de fotos con URL y fecha.
    }
  } catch (error) {
    console.error("Error al conectar con Firestore:", error);
    throw error; // Lanza el error para manejarlo en el lugar donde llames esta función.
  }
};