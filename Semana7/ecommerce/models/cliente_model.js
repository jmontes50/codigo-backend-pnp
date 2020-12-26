const Sequelize = require('sequelize');

const cliente_model = (conexion) => {
  let cliente = conexion.define('clientes', {
    cliId: {
      field:'cli_id',
      primaryKey: true,
      allowNull:false,
      autoIncrement:true,
      type:Sequelize.INTEGER
    },
    cliNombre:{
      type:Sequelize.STRING(60),
      field:'cli_nombres',
    },
    cliApellidos:{
      type:Sequelize.STRING(100),
      field:'cli_apellidos'
    },
    cliDocumento:{
      type:Sequelize.STRING(12),
      field:'cli_documento'
    }
  },
  {
    tableName:'t_clientes',
    timestamps:true
  });
  return cliente;
}

module.exports = cliente_model;