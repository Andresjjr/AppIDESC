// src/config/firebaseAdmin.js
import admin from 'firebase-admin';
import serviceAccount from '@/services/jsonData.json';

// Evita inicializar Firebase Admin varias veces
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export { admin };
