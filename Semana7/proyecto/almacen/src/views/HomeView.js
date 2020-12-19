import React, {useState,useEffect } from 'react'
import Tarjeta from '../components/Tarjeta';
import ProductosService from '../services/productosService';

export default function HomeView() {
  const prodService = new ProductosService();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    prodService.obtenerProductos().then(prods => {
      setProductos([...prods])
    })
  },[])

  return (
    <div>
      <h1>Mis Productos</h1>
      <div className="row">
        {
          productos.map((prod, i) => (
            <Tarjeta producto={prod} key={i}/>
          ))
        }
      </div>
    </div>
  )
}
