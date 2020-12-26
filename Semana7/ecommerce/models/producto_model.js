const Sequelize = require('sequelize');

const producto_model = (conexion) => {
  let producto = conexion.define('producto',{
    prodId: {
      primaryKey:true,
      field:'prod_id',
      autoIncrement:true,
      type:Sequelize.INTEGER,
      allowNull: false
    },
    prodNombre: {
      type:Sequelize.STRING(45),
      field:'prod_nombre'
    },
    prodPrecio: {
      type:Sequelize.DECIMAL(5,2),
      field: 'prod_precio'
    },
    prodImagen: {
      type:Sequelize.STRING(200),
      field:'prod_imagen'
    },
    prod_stock:{
      type:Sequelize.INTEGER,
      field:'prod_stock'
    }
  }, {
    tableName: 't_productos',
    timestamp: true
  })

  return producto;
}

module.exports = producto_model;