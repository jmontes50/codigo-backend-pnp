//npm i sequelize
const Sequelize = require('sequelize');

const conexion = new Sequelize(
  //Base de datos, usuario, password, configuración
  "ecommerce","root","root",{
    host: "127.0.0.1",
    dialect: "mysql",
    timezone: "-05:00",
    //opciones extra
    dialectOptions:{
      dateString:true
    }
  }
);

module.exports = {
  // conexion:conexion
  conexion
}