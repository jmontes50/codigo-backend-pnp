const { getProductos, getProductoById } = require('../services/productoServices');
const productoService = require('../services/productoServices');

module.exports = {
  create: async (req, res) => {
    try {
      const productoNuevo = await productoService.create(req.body);
      res.status(201).send({
        ok:true,
        content:productoNuevo
      })
    } catch (error) {
      res.status(409).send({
        ok:false,
        content:error
      })
    }
  },
  getProductos: async(req, res) => {
    try{
      const productos = await productoService.getProductos();
      res.status(200).send({
        ok:true,
        content:productos
      })
    }catch(error){
      res.status(404).send({
        ok:false,
        content:productos
      })
    }
  },
  getProductoById: async(req, res) => {
    try {
      const producto = await productoService.getProductoById(req.params.id);
      res.status(200).send({
        ok:true,
        content:producto
      })
    } catch (error) {
      res.status(404).send({
        ok:false,
        content:error
      })
    }
  }
}