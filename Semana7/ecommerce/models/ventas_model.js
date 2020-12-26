const Sequelize = require('sequelize');

const venta_model = (conexion) => {
  let venta = conexion.define('ventas', {
    ventId: {
      field:'vent_id',
      primaryKey:true,
      allowNull:false,
      autoIncrement:true,
      type:Sequelize.INTEGER
    },
    ventFecha: {
      field:'vent_fecha',
      type: Sequelize.DATE
    },
    ventIgv: {
      field:'vent_igv',
      type:Sequelize.DECIMAL(5,2)
    },
    ventMonto: {
      field:'vent_monto',
      type:Sequelize.DECIMAL(5,2)
    }
  },{
    tableName:'t_ventas',
    timestamps:true
  });
  return venta;
}

module.exports = venta_model;