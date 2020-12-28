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
    // console.log({arregloCategorias})
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

const obtenerCategoriaPorId = (req, res) => {
  // console.log(req.params)
  let { id } = req.params;
  Categoria.findByPk(id).then(categoria => {
    if(categoria){ //un valor que se considere true
      return res.json({
        ok:true,
        content:categoria,
        message:null
      })
    }else{
      return res.status(404).json({
        ok:false,
        content: null,
        message: 'No se encontro la categoria'
      })
    }
  }).catch(error => {
    res.status(500).json({
      ok:false,
      content:error,
      message:null
    })
  })
}

const actualizarCategoria = (req, res) => {
  let {id} = req.params;
  Categoria.findByPk(id)
  .then(categoria => {
    if(categoria){
      //Si! es que mi categoria existe
      let cuerpo = req.body;
      // update() retorna una promesa
      return Categoria.update(cuerpo, {
        where:{
          categoriaId:id
        }
      })
    }else{
      //no existe :'(
        return res.status(404).json({
          ok:false,
          content:null,
          message:'No encontramos la categoria'
        })
    }
  }) //este .then hare referencia a la promesa retornada con update
  .then(categoriaActualizada => {
    //aL momento de aplicar un where, nop necesariamente voy a obtener un solo resultado por eso en el .then() el resultado sera un arreglo
    if (categoriaActualizada[0]){
      return res.json({
        ok:true,
        content:null,
        message:'Se actualizo correctamente la categoria'
      })
      // Si al actualizar mi evaluacion de categoria no recibe nada, es porque el body es incorrecto
    }else{
      return res.status(400).json({
        ok:false,
        content:null,
        message: "No se actualizo ninguna categoria, verifica el body"
      })
    }
  })
}

module.exports = {
  crearCategoria,
  obtenerCategorias,
  obtenerCategoriaPorId,
  actualizarCategoria
}