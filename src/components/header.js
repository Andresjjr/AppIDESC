// src/components/Header.js
import React from "react";
import { useRouter } from "next/router";
import routes from "../lib/routes"; // Importa las rutas

const Header = ({ adminName }) => {
  const router = useRouter();

  const handleLogout = () => {
    router.push(routes.login); // Usa la ruta desde el archivo de rutas
  };

  const handleCreateRequest = () => {
    router.push(routes.createRequest); // Usa la ruta desde el archivo de rutas
  };

  const handleMenu = () => {
    router.push(routes.menu); // Usa la ruta desde el archivo de rutas
  };

  return (
    <header className="flex justify-between items-center px-4 py-2 bg-gray-200 shadow">
      <div className="flex items-center">
        <img src="/logo.webp" alt="Company Logo" className="h-8 w-8 mr-2" />
        <span className="text-gray-700 font-semibold">{adminName}</span>
      </div>
      <nav className="flex space-x-4">
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
        <button
          onClick={handleCreateRequest}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Crear Petición
        </button>
        <button
          onClick={handleMenu}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Menu
        </button>
      </nav>
    </header>
  );
};

export default Header;
