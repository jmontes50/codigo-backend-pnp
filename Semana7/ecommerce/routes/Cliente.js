const {Router} = require('express');
const {
        RegistrarCliente,
        LoginCliente
      } = require('../controllers/Cliente');

const cliente_router = Router();

cliente_router.post('/registro', RegistrarCliente);
cliente_router.post('/login', LoginCliente);

module.exports = {
  cliente_router
}