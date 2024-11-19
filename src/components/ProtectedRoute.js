import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const ADMIN_EMAIL = 'a.jaragarces@hotmail.com'; // Mismo correo del administrador

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // Redirigir a login si no hay usuario autenticado o no es el admin
      if (!user || user.email !== ADMIN_EMAIL) {
        router.push('/login');
      }
    });

    return () => unsubscribe();
  }, [router]);

  return children;
}
