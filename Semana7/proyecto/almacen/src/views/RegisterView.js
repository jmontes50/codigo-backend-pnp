import React, {useState} from 'react'
import {registro} from "../services/authService";
import Swal from "sweetalert2";

export default function RegisterView() {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const registrar = (e) => {
    e.preventDefault();
    registro(correo, password)
    .then(rpta => {
      console.log(rpta);
      Swal.fire({
        icon:"success",
        title:"Registrado!",
        showConfirmation:false,
        timer:2000
      })
    })
    .catch(err => {
      console.log(err);
      Swal.fire({
        icon:"error",
        title:"Ha ocurrido un error!",
        showConfirmation:false,
        timer:2000
      })
    })
  }

  return (
    <div className="d-flex justify-content-center">
      <div style={{width:'400px'}}>
        <div className="card mt-3">
          <div className="card-body">
            <h2 className="card-title">
              Registrate
            </h2>
            <form onSubmit={(e)=>{registrar(e)}}>
              <div className="form-group">
                <label>Correo:</label>
                <input 
                type="email" 
                className="form-control" 
                value={correo}
                onChange={(e) => {setCorreo(e.target.value)}}
                />
              </div>
              <div className="form-group">
                <label>Contraseña:</label>
                <input 
                type="password" 
                className="form-control"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Registrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
