const {crearCategoria,obtenerCategorias} = require('../controllers/Categoria');
const {Router} = require('express');

const categoria_router = Router();

categoria_router.post('/categoria', crearCategoria);
categoria_router.get('/categoria', obtenerCategorias);

module.exports = {
  //categoria_router:categoria_router
  categoria_router
}
