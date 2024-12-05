import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export const getTokens = async () => {
  try {
    const tokensRef = collection(db, "tokens");
    const querySnapshot = await getDocs(tokensRef);
    
    if (querySnapshot.empty) {
      console.log("No hay tokens en la colección.");
      return []; // Retorna un arreglo vacío si no hay datos.
    } else {
      const tokens = [];
      querySnapshot.forEach((doc) => {
        tokens.push({ id: doc.id, ...doc.data() }); // Guarda el ID y los datos del documento.
      });
      console.log("----------");
      console.log(tokens);
      console.log("----------");
      
      return tokens; // Retorna la lista de tokens.
    }
  } catch (error) {
    console.error("Error al conectar con Firestore:", error);
    throw error; // Lanza el error para manejarlo en el lugar donde llames esta función.
  }
};
