import React from "react";

export default function Message({ message: { user, text }, name }) {
  let esElUsuarioActual = false;

  const nombreSinEspacio = name.trim().toLowerCase();

  if (user === nombreSinEspacio) {
    esElUsuarioActual = true;
  }

  return esElUsuarioActual ? (
    <div className="bg-primary text-white">{text}</div>
  ) : (
    <div className="bg-secondary text-white">{text}</div>
  );
}
