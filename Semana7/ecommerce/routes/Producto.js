const {
        crearProducto,
        obtenerProductos,
        obtenerProductoPorId,
        actualizarProducto
      } = require('../controllers/Producto');
const {Router} = require('express');

const producto_router = Router();

producto_router.post('/producto', crearProducto);
producto_router.get('/producto', obtenerProductos);
producto_router.get('/producto/:id', obtenerProductoPorId);
producto_router.put('/producto/:id', actualizarProducto);


module.exports = {
  producto_router
}