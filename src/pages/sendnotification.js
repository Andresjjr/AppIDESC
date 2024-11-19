import { messaging } from '@/lib/firebaseadmin';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { token, title, body } = req.body; // Recibe el token del dispositivo y contenido.

    try {
      const message = {
        notification: {
          title,
          body,
        },
        token, // Token del dispositivo móvil.
      };

      await messaging.send(message);
      res.status(200).json({ success: true, message: 'Notification sent' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Failed to send notification' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}
