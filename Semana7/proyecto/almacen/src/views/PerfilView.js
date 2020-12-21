import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/authContext";
import { obtenerPerfil, editarPerfil } from "../services/authService";
export default function PerfilView() {
  const { user } = useContext(AuthContext);

  const [perfil, setPerfil] = useState({
    email: "",
    nombres: "",
    apellidos: "",
    edad: 0,
    telefono: "",
    foto: "",
  });

  const getPerfil = () => {
    obtenerPerfil(user).then((perfil) => {
      console.log({ perfil });
      setPerfil(perfil);
    });
  };

  const actualizarInput = (e) => {
    setPerfil({
      ...perfil,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    getPerfil();
  }, []);

  const guardarPerfil = (e) => {
    e.preventDefault()
    editarPerfil(user, perfil).then(rpta => {
      console.log("exito al editar!")
    })
  }

  return (
    <div>
      <h1>EditarPerfil</h1>
      <form onSubmit={(e)=>{guardarPerfil(e)}}>
        <label>Nombres:</label>
        <input
          type="text"
          name="nombres"
          value={perfil.nombres}
          onChange={(e) => {
            actualizarInput(e);
          }}
        />
        <label>Apellidos:</label>
        <input
          type="text"
          name="apellidos"
          value={perfil.apellidos}
          onChange={(e) => {
            actualizarInput(e);
          }}
        />
        <label>Edad:</label>
        <input
          type="number"
          name="edad"
          value={perfil.edad}
          onChange={(e) => {
            actualizarInput(e);
          }}
        />
        <label>Teléfono:</label>
        <input
          type="text"
          name="telefono"
          value={perfil.telefono}
          onChange={(e) => {
            actualizarInput(e);
          }}
        />
        <button type="submit">Editar Perfil</button>
      </form>
    </div>
  );
}
