const {Categoria} = require('../config/Sequelize');

const crearCategoria = (req, res) => {
  //req.params -> extra de la url los parametros que mandemos
  //req.body -> extrae del body la informacion para crear o actualizar un recurso (json)
  console.log(req.body);
  res.json({
    ok:true
  })
}

module.exports = {
  crearCategoria
}