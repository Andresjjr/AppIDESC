"use client";

import LogOut from "@/components/dashboard/LogOut";
import Ventana from "@/components/dashboard/Ventana";
import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";

function Page() {
  const [verVentana, setVerVentana] = useState(false);
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    const fotosRef = collection(db, "fotos");
    const q = query(fotosRef, orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fotosData = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.imageUrl && data.timestamp) {
          fotosData.push({ imageUrl: data.imageUrl, timestamp: data.timestamp.toDate().toLocaleString() });
        }
      });
      setFotos(fotosData);
    });

    return () => unsubscribe();
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
                Lista de fotos:
              </h3>
              <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {fotos.map((foto, index) => (
                  <li key={index} className="mb-2">
                    <a
                      href={foto.imageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={foto.imageUrl}
                        alt={`Foto ${index + 1}`}
                        className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                      />
                    </a>
                    <span className="text-gray-600 block mt-2 text-sm">
                      Fecha de subida: {foto.timestamp}
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