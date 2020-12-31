const {
        crearProducto,
        obtenerProductos,
        obtenerProductoPorId,
        actualizarProducto,
        eliminarProducto
      } = require('../controllers/Producto');
const {Router} = require('express');
const {wachiman} = require('../utils/Validador');

const producto_router = Router();

producto_router.post('/producto', crearProducto);
producto_router.get('/producto', obtenerProductos);
//los métodos que utilizamos después de la ruta pueden utilizar un "handler/middleware" si la operación es correcta pues todo va bien y al final dejamos que ejecute el controlador
producto_router.get('/producto/:id',wachiman, obtenerProductoPorId);
producto_router.put('/producto/:id', actualizarProducto);
producto_router.delete('/producto/:id', eliminarProducto);


module.exports = {
  producto_router
}