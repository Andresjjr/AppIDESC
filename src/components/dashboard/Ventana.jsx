import { useState } from "react";
import { addTask } from "@/services/addtask";

function Ventana({ verVentana, setVerVentana }) {
  const [nombreProducto, setNombreProducto] = useState("");
  const [marca, setMarca] = useState("");
  const [direccion, setDireccion] = useState("");
  const [nombreLocal, setNombreLocal] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Asegúrate de prevenir el comportamiento por defecto del formulario
    console.log("ENTREEEe");

    const data = {
      nombreProducto,
      marca,
      direccion,
      nombreLocal,
    };

    console.log("Datos del formulario:", data);

    try {
      await addTask(data); // Llama a la función para agregar la tarea y enviar la notificación
      console.log("Tarea añadida y notificación enviada con éxito");
    } catch (error) {
      console.error("Error al añadir la tarea o enviar la notificación:", error);
    }

    // setVerVentana(!verVentana); // descaomentar esto para cerrar la ventana
  };

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
        <div>
          <div className="flex flex-col gap-3">
            <label>Nombre producto</label>
            <input
              type="text"
              value={nombreProducto}
              onChange={(e) => setNombreProducto(e.target.value)}
              className="border border-black rounded-lg p-1"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label>Marca</label>
            <input
              type="text"
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
              className="border border-black rounded-lg p-1"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label>Dirección</label>
            <input
              type="text"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              className="border border-black rounded-lg p-1"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label>Nombre local</label>
            <input
              type="text"
              value={nombreLocal}
              onChange={(e) => setNombreLocal(e.target.value)}
              className="border border-black rounded-lg p-1"
            />
          </div>
          <div className="mt-4 flex justify-end">
            <button
              onClick={handleSubmit}
              className="bg-black text-white py-3 px-5 rounded-lg"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ventana;