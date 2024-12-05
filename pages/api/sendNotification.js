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
      data: {
        key1: "value1", // Puedes agregar datos adicionales aquí
        key2: "value2"
      }
    };

    // Enviar notificaciones a múltiples dispositivos
    const response = await admin.messaging().sendEachForMulticast({
      tokens: tokens,
      ...payload,
    });

    // Retornar únicamente los datos necesarios
    res.status(200).json({
      success: true,
      successCount: response.successCount,
      failureCount: response.failureCount,
      responses: response.responses,
      sentMessage: message, // descomentar esto si quieres ver el mensaje en la respuesta de la api
    });
    
  } catch (error) {
    console.error('Error en sendNotification API:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
}