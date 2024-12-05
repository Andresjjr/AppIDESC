import { useState } from "react";
import { addTask } from "@/services/addtask";
import { getTokens } from "@/services/getTokens";
import { enviarNotificacion } from "@/services/enviarNotificacion";

function Ventana({ verVentana, setVerVentana }) {
  const [nombreProducto, setNombreProducto] = useState("");
  const [marca, setMarca] = useState("");
  const [direccion, setDireccion] = useState("");
  const [nombreLocal, setNombreLocal] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      nombreProducto,
      marca,
      direccion,
      nombreLocal,
    };

    try {
      // 1. Guarda la tarea
      await addTask(data);
      console.log('Tarea añadida con éxito.');

      // 2. Obtén los tokens registrados
      const tokens = await getTokens();
      if (tokens.length === 0) {
        console.log('No se enviaron notificaciones porque no hay tokens registrados.');
      } else {
        // 3. Envía la notificación
        const message = {
          title: 'Tarea creada',
          body: `Se ha creado la tarea: ${nombreProducto}`,
        };
        await enviarNotificacion(tokens.map((t) => t.token), message);
        console.log('Notificaciones enviadas con éxito.');
      }
    } catch (error) {
      console.error('Error:', error);
    }

    // Cierra la ventana después de la acción
    setVerVentana(!verVentana);
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
