const {Producto, Categoria} = require('../config/Sequelize');

const crearProducto = (req, res) => {
  let {categoriaId} = req.body;

  Categoria.findByPk(categoriaId)
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

module.exports = {
  // crearProducto:crearProducto
  crearProducto
}