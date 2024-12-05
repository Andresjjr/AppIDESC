'use client'

import { useEffect } from "react";
import { initializeFirebase } from "@/lib/firebase-setup";
import { useState } from 'react';
import BotonLogin from '@/components/auth/BotonLogin';
import { requestPermission } from "@/config/requestPermission";
import { registerServiceWorker } from "@/utils/registerServiceWorker";

export default function LoginPage() {
  const [correo_usuario, setCorreoUsuario] = useState('');
  const [password_usuario, setContraseñaUsuario] = useState('');
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    registerServiceWorker();
    initializeFirebase();
    requestPermission();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-lg">
        <div className="flex justify-center mb-6">\
          LOGO
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Iniciar sesión (Solo Administradores)
        </h2>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              placeholder="Ingrese su correo electrónico"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={correo_usuario}
              onChange={(e) => setCorreoUsuario(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              placeholder="Ingrese su contraseña"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={password_usuario}
              onChange={(e) => setContraseñaUsuario(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">
                Recordarme
              </span>
            </label>
          </div>

          <BotonLogin
            correo={correo_usuario}
            passwordUsuario={password_usuario}
            setMensaje={setMensaje}
          />
        </form>
        {mensaje && (
          <p className="mt-4 text-center text-red-500">{mensaje}</p>
        )}
      </div>
    </div>
  );
}
