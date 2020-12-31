const { Cliente } = require('../config/Sequelize');

const RegistrarCliente = (req, res) => {
  let {cliEmail} = req.body;
  // findOne -> buscar un registro y según los parámetros retornaba el primer registro que encontraba 
  Cliente.findOne({
    where:{
      cliEmail:cliEmail
    }
  }).then(clienteEncontrado => {
    //Si encuentra un cliente, es que ya esta registrado
    if(clienteEncontrado){
      return res.status(400).json({
        ok:false,
        message:'Ya existe un cliente con este correo, verificar',
        content:null
      })
    }else{
      //El correo esta disponible, vamos a crear un nuevo Cliente!!
      let nuevoCliente = Cliente.build(req.body);
      nuevoCliente.setSaltAndHash(req.body.password);
      // Con esto ya deberia tener mi modelo de cliente tanto con SALT Y HASH
      nuevoCliente.save()
      .then(clienteCreado => {
        return res.status(201).json({
          ok:true,
          message:'Cliente registrado exitosamente',
          content: clienteCreado
        })
      })
      .catch(error => {
        return res.status(500).json({
          ok:false,
          message:'Hubo un error al intentar guardar el cliente',
          content:error
        })
      })
    }
  })
}

const LoginCliente = (req, res) => {
  Cliente.findOne({
    where:{
      cliEmail: req.body.email
    }
  }).then(clienteEncontrado => {
    if(clienteEncontrado) {
      //Si existe el cliente, con ese correo
      //Aquí deberiamos validar el password
      let resultado = clienteEncontrado.validarPassword(req.body.password);
      console.log({resultado})
      if(resultado){
        let token = clienteEncontrado.generarJWT();
        console.log('tknControlador', token);
        res.json({
          ok:true,
          content:null,
          token:token
        })
      }else{
        return res.status(403).json({
          ok:false,
          message:'El email o contraseña del cliente es incorrecto'
        })
      }
    }else{
      return res.status(404).json({
        ok:false,
        message:'No encontramos ningún cliente con ese correo',
        content:null
      })
    }
  })
  .catch(error => {
    return res.status(500).json({
      ok:false,
      content:error
    })
  })
}

module.exports = {
  RegistrarCliente,
  LoginCliente
}