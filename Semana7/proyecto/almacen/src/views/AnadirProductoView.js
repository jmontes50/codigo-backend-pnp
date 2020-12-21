import React, { useState } from "react";
import ProductosService from "../services/productosService";
import {storage} from '../config/firebase';
import {v4 as uuidv4} from "uuid";

let imagenProducto;

export default function AnadirProductoView() {
  const prodService = new ProductosService();

  const [value, setValue] = useState({
    nombre: "",
    descripcion: "",
    precio: 0,
    stock: 0,
    imagen: "",
    marca: "",
  });

  const cambiarNombre = (nombre) => {
    let nombreAleatorio = uuidv4();
    // ==> 23532532gfsdgsdf-fdsgsd21343-asfsafsa
    console.log({nombreAleatorio})
    let separarNombre = nombre.split(".");
    // ==> imagen.png => ["imagen","png"]
    console.log({separarNombre})
    let nuevoNombre = `${nombreAleatorio}.${separarNombre[1]}`
    return nuevoNombre;
  }

  const actualizarInput = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const manejarImagen = (e) => {
    e.preventDefault();
    let miImagen = e.target.files[0]
    imagenProducto = miImagen;
    console.log(imagenProducto)
    // cambiarNombre(imagenProducto.name)
  }

  const manejarSubmit = (e) => {
     e.preventDefault();
     let nuevoNombre = cambiarNombre(imagenProducto.name);
    const refStorage = storage.ref(`productos/${nuevoNombre}`)
    prodService.subirImagen(imagenProducto, refStorage)
    .then(urlImagen => {
      prodService.crearProducto({...value, imagen:urlImagen}).then(rpta => {
        console.log("Exito!!")
      })
    })
  }

  return (
    <div>
      <h1>Crear Producto</h1>
      <form onSubmit={(e) => {manejarSubmit(e)}}>
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
        <div className="form-group">
          <label>Elegir Imagen</label>
          <input 
          type="file"
          className="form-control"
          onChange={(e)=>{manejarImagen(e)}}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Agregar Producto
        </button>
      </form>
    </div>
  );
}
