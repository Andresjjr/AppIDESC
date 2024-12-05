export const enviarNotificacion = async (tokens, message) => {
    try {
      const response = await fetch('http://localhost:3000/api/sendNotification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tokens, message }),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log('Notificaciones enviadas:', data);
    } catch (error) {
      console.error('Error al enviar notificaciones:', error.message);
      throw error;
    }
  };