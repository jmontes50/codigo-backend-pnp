const {Producto, Categoria} = require('../config/Sequelize');

//solamente va a ser una función más, no es un controlador
const existeCategoria = (id) => {
  return new Promise ((resolve, reject) => {
    Categoria.findByPk(id)
    .then(categoria => {
      if(categoria){
        resolve(true)
      }else{
        reject("No se encontro la categoria");
      }
    })
  })
}

const crearProducto = (req, res) => {
  let {cat_id} = req.body;

  existeCategoria(cat_id)
  .then(() => {
    let cuerpo = req.body;
      let objProducto = Producto.build(cuerpo);
      // retornamos promesa
      return objProducto.save()
  })//aqui capturamos el resolve de objProducto.save()
  .then(productoCreado => {
    return res.status(201).json({
      ok:true,
      content:productoCreado,
      message:null
    })
  })
  .catch(error => {
    res.status(404).json({
      ok:false,
      content:error,
      message:'Error, verificar el content'
    })
  })
}

const obtenerProductos = (req, res) => {
  Producto.findAll({
    include:[
      {
        model:Categoria,
        attributes:['cat_nombre']
      }
    ],
    where:{
      estado:true
    }
  })
  .then(productos => {
    return res.json({
      ok:true,
      content:productos,
      message:null
    })
  })
  .catch(error => {
    return res.status(500).json({
      ok:false,
      content:error,
      message:'Error al obtener los productos'
    })
  })
}

const obtenerProductoPorId = (req, res) => {
  let { id } = req.params;
  Producto.findByPk(id)
  .then(producto => {
    if(producto){
      return res.json({
        ok:true,
        content:producto,
        message:null
      })
    }else{
      res.status(404).json({
        ok:false,
        content:null,
        message:"No se encontro el producto"
      })
    }
  })
  .catch(error => {
    return res.status(500).json({
      ok:false,
      content:error,
      message:"Error interno"
    })
  })
}

const actualizarProducto = (req, res) => {
  if(req.body.cat_id){ //Si es que tengo uan propiedad cat_id, dentro del body, buscare la categoria
    
  }
}

module.exports = {
  // crearProducto:crearProducto
  crearProducto,
  obtenerProductos,
  obtenerProductoPorId
}