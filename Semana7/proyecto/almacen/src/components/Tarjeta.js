import React from 'react'

export default function Tarjeta({producto}) {
  return (
    <div className="col-12 col-lg-6 col-xl-3">
      <div class="card">
        <img src="https://picsum.photos/500" className="card-img-top"/>
        <div className="card-body">
          <h3 className="card-title">{producto.nombre}</h3>
          <p className="card-text">
            {producto.descripcion}
          </p>
          <button className="btn btn-primary btn-sm">Añadir a carrito</button>
        </div>
      </div>
      
    </div>
  )
}
