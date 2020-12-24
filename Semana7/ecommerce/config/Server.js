const express = require('express');
const bodyParser = require('body-parser');

class Server {
  constructor(){
    this.app = express();
    this.puerto = process.env.PORT || 8000;

  }

  configurarBodyParser(){}

  manejarRutas(){}

  iniciarServidor(){
    this.app.listen(this.puerto, () => {
      console.log(`Servidor levantado exitosamente en el puerto: ${this.puerto}`)
    })
  }
  
}

module.exports = Server;