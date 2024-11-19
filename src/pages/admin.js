import ProtectedRoute from '../components/ProtectedRoute';

export default function AdminPage() {
  return (
    <ProtectedRoute>
      <div>
        <h1>Panel de Administración</h1>
        {/* Contenido solo visible para el administrador */}
      </div>
    </ProtectedRoute>
  );
}
