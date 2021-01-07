import React, { useState, useEffect } from "react";
import axios from 'axios';
import {CulqiProvider, Culqi} from 'react-culqi';

export default function Productos() {
  const [productos, setProductos] = useState([]);

  const obtenerProductos = async () => {
    try {
      let {data:{content}} = await axios.get('http://localhost:3000/api/v1/productos');
      setProductos(content);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(()=>{
    obtenerProductos();
  },[])

  return <div>
    {productos.map((prod,i) => (
      <div className="card" key={i}>
        <div className="card-body">
          <h4 className="card-title">
            {prod.nombre}
          </h4>
          <p className="card-text">
            {prod.descripcion}
          </p>
          <label>{prod.precio}</label>

          {/*  */}
          <CulqiProvider
          title={`Pagar ${prod.nombre}`}
          description="Proceder Compra"
          amount={`${prod.precio} * 100`}
          publicKey="pk_test_q7xrkzqnL6fqNGqI"
          onToken={token => {
            console.log("token recibido", token)
          }}
          onError={error => {
            console.log("Errorrr", error)
          }}
          >
            
          </CulqiProvider>
        </div>
      </div>
    ))}
  </div>;
}
