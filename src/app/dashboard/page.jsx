"use client";

import LogOut from "@/components/dashboard/LogOut";
import Ventana from "@/components/dashboard/Ventana";
import { useState } from "react";

function Page() {
  const [verVentana, setVerVentana] = useState(false);

  return (
    <>
      <div className="bg-red-200 w-full min-h-screen flex flex-col gap-9 p-3">
        <header className="flex items-center flex-col sm:flex-row sm:justify-between">
          <div className="flex gap-2">
            <div className="">
              <div>Logo</div>
            </div>
            <span>Nombre Usuario</span>
          </div>
          <nav className="flex justify-center gap-5 flex-wrap">
            <div>Menu</div>
            <div onClick={() => setVerVentana(!verVentana)}>Nueva tarea</div>
            <LogOut/>
          </nav>
        </header>
        <div className="bg-blue-300">
          Notificaciones
          <div className="bg-yellow-200">
            <div
              className="bg-red-300"
            >
              contenido 1
            </div>
            <div className="bg-blue-200">contenido 2</div>
            <div>contenido 3</div>
          </div>
        </div>
      </div>
      {verVentana && <Ventana verVentana={verVentana} setVerVentana={setVerVentana}/>}
    </>
  );
}

export default Page;
