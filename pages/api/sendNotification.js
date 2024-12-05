// pages/api/sendNotification.js
import { admin } from '@/config/firebaseAdmin';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { tokens, message } = req.body;

    // Validar que existan los datos necesarios
    if (!tokens || !Array.isArray(tokens) || tokens.length === 0) {
      return res.status(400).json({ success: false, error: 'Tokens are required and must be a non-empty array' });
    }
    if (!message || !message.title || !message.body) {
      return res.status(400).json({ success: false, error: 'Message must include title and body' });
    }

    // Construir el payload de la notificación
    const payload = {
      notification: {
        title: message.title,
        body: message.body,
      },
    };

    // Enviar notificaciones a múltiples dispositivos
    const response = await admin.messaging().sendMulticast({
      tokens: tokens,
      ...payload,
    });

    res.status(200).json({ success: true, response });
  } catch (error) {
    console.error('Error en sendNotification API:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
}
