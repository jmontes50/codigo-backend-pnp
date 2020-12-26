const express = require('express');
const bodyParser = require('body-parser');
const {conexion} = require('./Sequelize');

class Server {
  constructor(){
    this.app = express();
    this.puerto = process.env.PORT || 8000;
    // Los CORS tiene que ir antes de cualquier middleware
    this.habilitarCORS();
    this.configurarBodyParser();
    this.manejarRutas();
  }

  configurarBodyParser(){
    this.app.use(bodyParser.json())
  }

  habilitarCORS(){
    this.app.use((req, res, next) => {
      // Access-Control-Allow-Origin =  insica que dominio o dominios pueden acceder a mi API, en caso de utilizar *, todos los dominios pueden acceder sin problemas
      res.header('Access-Control-Allow-Origin','*');
      //Sirve para indicar que tipos de cabecera puedo recibir del cliente, si no la declaro pues me la rechaza
      res.header('Access-Control-Allow-Headers','Authorization,Content-Type,Access-Content-Type, Accept');
      //Indica que tipos de métodos HTTP podemos aceptar
      res.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
      //next() => para indicar que si esto fue bien continue con la operación/petición correspondiente
      next();
    })
  }

  manejarRutas(){
    this.app.get('/', (req, res) => {
      res.send('La API funciona correctamente!!!');
    })
  }

  iniciarServidor(){
    this.app.listen(this.puerto, () => {
      console.log(`Servidor levantado exitosamente en el puerto: ${this.puerto}`);

      // force:true => va a borrar toda la base de datos, tablas, valores, y la va a crear de nuevo, basicamente un drop all tables,
      // alter:true => verifica que los modelos esten igual a las tablas, si hay algun cambio solamente va a hacer el cambio en la diferencia que encuentre en el modelo y la tabla, esto messirve para no perder información
      conexion.sync({force:true, alter:true}).then(()=>{
        console.log('Base de datos sincronizada correctamente');
      })
      // No olvidar instalar el controlador de la BD
      //npm install mysql2
    })
  }
  
}

module.exports = Server;