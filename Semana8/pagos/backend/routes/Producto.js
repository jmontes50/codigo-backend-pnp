const {Router} = require('express');

const routerProductos = Router();

const {
  create,
  getProductoById,
  getProductos
} = require('../controllers/Producto');

routerProductos.post('/productos', create);
routerProductos.get('/productos', getProductos);
routerProductos.get('/productos/:id', getProductoById);

module.exports = routerProductos;