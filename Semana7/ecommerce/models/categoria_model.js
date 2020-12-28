const Sequelize = require('sequelize');

const categoria_model = (conexion) => {
  let categoria = conexion.define('categorias',{
    categoriaId: {
      primaryKey:true, //definiendo que es PK o que no lo es
      autoIncrement: true, //indica si es auto-Incrementable
      type:Sequelize.INTEGER, //Define el tipo de dato de la columna
      allowNull: false, //indica si permite que este vacio ese campo
      unique:true, //definimos que sea unico y no se repita
      field: 'cat_id'
    },
    categoriaNomb: {
      type: Sequelize.STRING(45),
      allowNull:false,
      field: 'cat_nombre'
    },
    estado:{
      type:Sequelize.BOOLEAN,
      defaultValue:true
    }
  }, //después que definimos las propiedades de nuestros campos, hay qque definir las propiedades de la tabla
  {
    tableName: 't_categorias',
    // campos de auditoria createdAt y updatedAt
    timestamps:true
  });
  
  return categoria;
}

module.exports = categoria_model;