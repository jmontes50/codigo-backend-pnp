const {Router} = require('express');
const {hacerVenta} = require('../controllers/Ventas');
const ventas_router = Router();

ventas_router.post('/venta', hacerVenta);

module.exports = {
  ventas_router
}