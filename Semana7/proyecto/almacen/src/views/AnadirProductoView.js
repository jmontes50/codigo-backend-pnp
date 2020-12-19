import React, { useState } from "react";

export default function AnadirProductoView() {
  const [value, setValue] = useState({
    nombre: "",
    descripcion: "",
    precio: 0,
    stock: 0,
    imagen: "",
    marca: "",
  });

  const actualizarInput = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <form>
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            value={value.nombre}
            onChange={(e) => {
              actualizarInput(e);
            }}
          />
        </div>
        <div className="form-group">
          <label>Descripción:</label>
          <input
            type="text"
            className="form-control"
            name="descripcion"
            value={value.descripcion}
            onChange={(e) => {
              actualizarInput(e);
            }}
          />
        </div>
        <div className="form-group">
          <label>Precio:</label>
          <input
            type="number"
            className="form-control"
            name="precio"
            value={value.precio}
            onChange={(e) => {
              actualizarInput(e);
            }}
          />
        </div>
        <div className="form-group">
          <label>Stock:</label>
          <input
            type="number"
            className="form-control"
            name="stock"
            value={value.stock}
            onChange={(e) => {
              actualizarInput(e);
            }}
          />
        </div>
        <div className="form-group">
          <label>Marca:</label>
          <input
            type="text"
            className="form-control"
            name="marca"
            value={value.marca}
            onChange={(e) => {
              actualizarInput(e);
            }}
          />
        </div>
      </form>
    </div>
  );
}
