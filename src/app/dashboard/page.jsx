"use client";

import LogOut from "@/components/dashboard/LogOut";
import Ventana from "@/components/dashboard/Ventana";
import { getFotos } from "@/services/getFotos";
import { useState, useEffect } from "react";

function Page() {
  const [verVentana, setVerVentana] = useState(false);
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    const fetchFotos = async () => {
      try {
        const fotosData = await getFotos();
        setFotos(fotosData);
        console.log(fotosData);
      } catch (error) {
        console.error("Error al obtener fotos:", error);
      }
    };

    fetchFotos();
  }, []);

  return (
    <>
      <div className="bg-gray-100 w-full min-h-screen flex flex-col gap-9 p-6">
        <header className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold text-gray-800">Logo</div>
            <span className="text-lg text-gray-600">Nombre Usuario</span>
          </div>
          <nav className="flex gap-6">
            <div className="text-gray-600 cursor-pointer hover:text-gray-800">
              Menu
            </div>
            <div
              className="text-gray-600 cursor-pointer hover:text-gray-800"
              onClick={() => setVerVentana(!verVentana)}
            >
              Nueva tarea
            </div>
            <LogOut />
          </nav>
        </header>
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Notificaciones
          </h2>
          <div className="bg-yellow-100 p-4 rounded-lg">
            <div className="bg-red-100 p-4 rounded-lg mb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Lista de URLs de fotos:
              </h3>
              <ul className="list-disc list-inside">
                {fotos.map((foto, index) => (
                  <li key={index} className="mb-2">
                    <a
                      href={foto.imageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {foto.imageUrl}
                    </a>
                    <span className="text-gray-600">
                      {" "}
                      - Fecha de subida: {foto.timestamp}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {verVentana && (
        <Ventana verVentana={verVentana} setVerVentana={setVerVentana} />
      )}
    </>
  );
}

export default Page;
