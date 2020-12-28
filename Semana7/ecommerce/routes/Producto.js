const {crearProducto} = require('../controllers/Producto');
const {Router} = require('express');

const producto_router = Router();

producto_router.post('/producto', crearProducto);



module.exports = {
  producto_router
}