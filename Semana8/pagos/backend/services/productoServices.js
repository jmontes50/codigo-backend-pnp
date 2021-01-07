const Producto = require('../models/Producto');

module.exports = {
  create: (body) => {
    const nuevoProducto = new Producto(body);
    return nuevoProducto.save();
  },
  getProductos: () => {
    return Producto.find({is_active:true})
  },
  getProductoById: (id) => {
    return Producto.findById(id);
  },
  updateProducto: (producto, body) => {
    let productoActualizado = {...producto, ...body};
    return productoActualizado.save();
  }
}