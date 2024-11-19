import { useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../lib/firebase'; // Importa la configuración de Firebase
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginPage() {
  const [correo_usuario, setCorreoUsuario] = useState('');
  const [contraseña_usuario, setContraseñaUsuario] = useState('');
  const [mensaje, setMensaje] = useState('');
  const router = useRouter();

  // Cambia este correo al del administrador configurado manualmente en Firebase
  const ADMIN_EMAIL = 'a.jaragarces@hotmail.com';

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      // Usar Firebase para iniciar sesión
      const userCredential = await signInWithEmailAndPassword(auth, correo_usuario, contraseña_usuario);
      const user = userCredential.user;

      // Verificar si el correo es el del administrador
      if (user && user.email === ADMIN_EMAIL) {
        setMensaje('Acceso concedido. Redirigiendo...');
        router.push('/dashboard'); // Redirige al panel de administración
      } else {
        setMensaje('No tienes permisos para acceder.');
      }
    } catch (error) {
      setMensaje('Error al iniciar sesión: ' + error.message);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">Iniciar sesión (Solo Administradores)</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo electrónico"
          className="border p-2 mb-4 w-full"
          value={correo_usuario}
          onChange={(e) => setCorreoUsuario(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="border p-2 mb-4 w-full"
          value={contraseña_usuario}
          onChange={(e) => setContraseñaUsuario(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
        >
          Iniciar sesión
        </button>
      </form>
      {mensaje && <p className="mt-4 text-red-500">{mensaje}</p>}
    </div>
  );
}
