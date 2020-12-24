const express = require('express');
const bodyParser = require('body-parser');
const {documentos_router} = require('../routes/Documentos');

class Server {
  constructor(){
    this.app = express();
    // process.env.PORT => En caso este en un servidor, se le asignará un puerto
    this.puerto = process.env.PORT || 8000;
    // IMPORTANTE!!! Yo tengo que utilizar este bodyParser antes de mis rutas
    this.configurarBodyParser();
    this.cargarRutas();
  }

  configurarBodyParser(){
    this.app.use(bodyParser.json());
  }

  iniciarServidor(){
    this.app.listen(this.puerto, () => {
      console.log(`El servidor se ha levantado exitosamente en el puerto ${this.puerto}`);
    })
  }

  cargarRutas(){
    //Asignar todas las rutas que puedan ser accedidas
    this.app.get('/',(req, res) => {
      res.status(200).send('La Api funciona correctamente!! :D');
    })
    this.app.use('/apiv1',documentos_router);
  }
}

module.exports = Server;