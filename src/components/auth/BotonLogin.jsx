import { useRouter } from 'next/navigation';
import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function BotonLogin({ correo, passwordUsuario, setMensaje }) {
  const router = useRouter();

  const ADMIN_EMAIL = 'a.jaragarces@hotmail.com';

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Usar Firebase para iniciar sesión
      const userCredential = await signInWithEmailAndPassword(auth, correo, passwordUsuario);
      const user = userCredential.user;

      // Verificar si el correo es el del administrador
      if (user && user.email === ADMIN_EMAIL) {
        setMensaje('Acceso concedido. Redirigiendo...');
        router.push("/dashboard");
      } else {
        setMensaje('No tienes permisos para acceder.');
      }
    } catch (error) {
      setMensaje('Error al iniciar sesión: ' + error.message);
    }
  };

  return (
    <button
      type="submit"
      className="bg-blue-500 text-white p-2 rounded"
      onClick={handleLogin}
    >
      Iniciar sesión
    </button>
  );
}

export default BotonLogin;