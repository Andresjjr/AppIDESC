import { getDatabase, ref, set, push, onValue } from "firebase/database";
import app from "@/lib/firebase";

// Inicializar Realtime Database
export const db = getDatabase(app);