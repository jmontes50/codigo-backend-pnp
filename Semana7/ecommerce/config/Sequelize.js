//npm i sequelize
const Sequelize = require('sequelize');
const categoria_model = require('../models/categoria_model');
const producto_model = require('../models/producto_model');
const cliente_model = require('../models/cliente_model');
const venta_model = require('../models/ventas_model');

const conexion = new Sequelize(
  //Base de datos, usuario, password, configuración
  "ecommerce","root","root",{
    host: "127.0.0.1",
    dialect: "mysql",
    timezone: "-05:00",
    logging:false, //para no mostrar Las consultas a la BD generadas, en la consola
    //opciones extra
    dialectOptions:{
      dateString:true
    }
  }
);

// Modelos con Conexiones
const Categoria = categoria_model(conexion)
const Producto = producto_model(conexion);
const Cliente = cliente_model(conexion);
const Venta = venta_model(conexion);

// Acá se arman las relaciones entre nuestras tablas
Categoria.hasMany(Producto,{foreignKey: 'cat_id'});
Producto.belongsTo(Categoria, {foreignKey: 'cat_id'});
Cliente.hasMany(Venta,{foreignKey: 'cli_id'});
Venta.belongsTo(Cliente, {foreignKey: 'cli_id'});
Producto.hasMany(Venta, {foreignKey: 'prod_id'});
Venta.belongsTo(Producto, {foreignKey: 'prod_id'});

module.exports = {
  // conexion:conexion
  conexion,
  Categoria,
  Producto,
  Cliente,
  Venta
}