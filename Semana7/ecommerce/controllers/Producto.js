const {Producto, Categoria} = require('../config/Sequelize');

const crearProducto = (req, res) => {
  let {cat_id} = req.body;

  Categoria.findByPk(cat_id)
  .then(categoria => {
    // Encontrando la categoria
    if(categoria){
      let cuerpo = req.body;
      let objProducto = Producto.build(cuerpo);
      // retornamos promesa
      return objProducto.save()
    }else{
      return res.status(404).json({
        ok:false,
        content:null,
        message:'No se encontro la categoria'
      });
    }
  })//aqui capturamos el resolve de objProducto.save()
  .then(productoCreado => {
    return res.status(201).json({
      ok:true,
      content:productoCreado,
      message:null
    })
  })
  .catch(error => {
    res.status(500).json({
      ok:false,
      content:error,
      message:'Error al crear el producto'
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

module.exports = {
  // crearProducto:crearProducto
  crearProducto,
  obtenerProductos,
  obtenerProductoPorId
}