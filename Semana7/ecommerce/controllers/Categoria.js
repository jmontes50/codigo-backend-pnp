const {Categoria} = require('../config/Sequelize');

const crearCategoria = (req, res) => {
  //req.params -> extra de la url los parametros que mandemos
  //req.body -> extrae del body la informacion para crear o actualizar un recurso (json)
  let cuerpo = req.body;
  let objCategoria = Categoria.build(cuerpo);
  // console.log({objCategoria})
  // Cuidado!, aún no hemos guardado nada en la BD
  objCategoria.save()
  .then(categoriaCreada => {
    return res.status(201).json({
      ok:true,
      content:categoriaCreada,
      message:'Se creo exitosamente una categoria'
    })
  })
  .catch(error => {
    return res.status(500).json({
      ok:false,
      content:error,
      message:'Hubo un error al crear la categoria'
    })
  })
}

const obtenerCategorias = (req, res) => {
  Categoria.findAll()
  .then(arregloCategorias => {
    console.log({arregloCategorias})
    return res.json({
      ok:true,
      content:arregloCategorias,
      message:null
    })
  })
  .catch(error => {
    return res.status(500).json({
      ok:false,
      content:error,
      message:'Hubo un error al devolver las categorias'
    })
  })
}

module.exports = {
  crearCategoria,
  obtenerCategorias
}