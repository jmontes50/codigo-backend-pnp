const {Router} = require('express');
const {RegistrarCliente} = require('../controllers/Cliente');

const cliente_router = Router();

cliente_router.post('/registro', RegistrarCliente);

module.exports = {
  cliente_router
}