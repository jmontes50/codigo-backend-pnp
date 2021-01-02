const express = require('express');
const bodyParser = require('body-parser');
const {conexion} = require('./Sequelize');
//2da manera cors
const cors = require('cors');
const {categoria_router} = require('../routes/Categoria');
const {producto_router} = require('../routes/Producto');
const {cliente_router} = require('../routes/Cliente');
const {ventas_router} = require('../routes/Ventas');

class Server {
  constructor(){
    this.app = express();
    this.puerto = process.env.PORT || 8000;
    // Los CORS tiene que ir antes de cualquier middleware
    // this.habilitarCORS();
    //2da manera cors
    this.app.use(cors());
    this.app.options('*', cors());
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
      res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Content-Type, Accept, Access-Control-Allow-Request-Method');
      //Indica que tipos de métodos HTTP podemos aceptar
      res.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
      res.header('Allow','GET, POST, PUT, OPTIONS, DELETE');
      //next() => para indicar que si esto fue bien continue con la operación/petición correspondiente
      next();
    })
  }

  manejarRutas(){
    this.app.get('/', (req, res) => {
      res.send('La API funciona correctamente!!!');
    });
    this.app.use('',categoria_router);
    this.app.use('',producto_router);
    this.app.use('',cliente_router);
    this.app.use('',ventas_router);
  }

  iniciarServidor(){
    this.app.listen(this.puerto, () => {
      console.log(`Servidor levantado exitosamente en el puerto: ${this.puerto}`);

      // force:true => va a borrar toda la base de datos, tablas, valores, y la va a crear de nuevo, basicamente un drop all tables,
      // alter:true => verifica que los modelos esten igual a las tablas, si hay algun cambio solamente va a hacer el cambio en la diferencia que encuentre en el modelo y la tabla, esto messirve para no perder información
      //alter:false en producción
      conexion.sync({force:false, alter:false}).then(()=>{
        console.log('Base de datos sincronizada correctamente');
      })
      // No olvidar instalar el controlador de la BD
      //npm install mysql2
    })
  }
}

module.exports = Server;