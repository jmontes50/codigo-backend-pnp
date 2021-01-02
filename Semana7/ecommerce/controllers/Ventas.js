const {Cliente, Producto, Venta} = require('../config/Sequelize');

const hacerVenta = (req, res) => {
  let {cliId} = req.body;
  //1. Valido que el cliente existe
  Cliente.findByPk(cliId).then(cliente => {
    if(cliente === null) {
      return res.status(404).json({
        ok:false,
        content:null,
        message:"Cliente no encontrado"
      })
    }
  }).catch(err => {
    return res.status(500).json({
      ok:false,
      content:err,
      message:'Error interno'
    })
  })

  let {productosId} = req.body;
  // Estamos transformando a partir del arreglo de Id de productos en un arreglo de Promesas
  //2. verifico que todos los productos existen
  let promesasProductos = productosId.map(prodId => {
    return Producto.findByPk(prodId)
  });
  // console.log({promesasProductos});
  //al resolver con Promise.all obtengo un arreglo de resultados a partir de la resolucion de todas las promesas
  Promise.all(promesasProductos)
  .then(resultados => {
    //encontre los productos!!!
    // console.log(resultados.dataValues)
    // for(let i = 0; i<resultados.length; i++){
    //   console.log(resultados[i].dataValues)
    // }
    //3. hacer mis ventas (muchos)
    //Creamos un nuevo arreglo de promesas pero para guardar una nueva venta por cada producto
    let promesasVentas = productosId.map(prodId => {
      //crear un objVenta de acuerdo al modelo
      let objVenta = {
        ventDocumento:req.body.ventDocumento,
        ventFecha:req.body.ventFecha,
        ventIgv:req.body.ventIgv,
        ventMonto:req.body.ventMonto,
        prod_id:prodId,
        cli_id:cliId
      }
      let nuevaVenta = Venta.build(objVenta);
      return nuevaVenta.save();
    })
    // console.log({promesasVentas})
    return Promise.all(promesasVentas);
  }) //aca resolvemos el PromiseAll de ventas, save de nuestro arreglo de promesas para crear las ventas
  .then(ventas => {
    // for(let i=0; i<ventas.length;i++){
    //   console.log(ventas[i].dataValues)
    // }
    return res.status(201).json({
      ok:true,
      content:ventas,
      message:'ventas creadas'
    })
  })
  .catch(error => {
    return res.status(500).json({
      ok:false,
      content:error,
      message:"Error Interno"
    })
  })

}

module.exports = {
  hacerVenta
}