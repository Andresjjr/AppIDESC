import React from "react";

function Ventana({ verVentana, setVerVentana }) {
  return (
    <div className="bg-[rgba(0,0,0,0.37)] h-screen w-screen fixed top-0 left-0 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-5 min-w-[80%] max-h-[85%] min-h-[50%] overflow-auto">
        <header>
          <span
            onClick={() => setVerVentana(!verVentana)}
            className="cursor-pointer"
          >
            x
          </span>
        </header>
        <form action="">
          <div className="flex flex-col gap-3">
            <label htmlFor="">Nombre producto</label>
            <input type="text" className="border border-black rounded-lg p-1" />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="">Marca</label>
            <input type="text" className="border border-black rounded-lg p-1" />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="">direccion</label>
            <input type="text" className="border border-black rounded-lg p-1" />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="">Nombre local</label>
            <input type="text" className="border border-black rounded-lg p-1" />
          </div>
        </form>
        <div className="mt-4 flex justify-end">
          <button className="bg-black text-white py-3 px-5 rounded-lg">
            enviar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ventana;
