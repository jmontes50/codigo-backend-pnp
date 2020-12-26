const CategoriaRutas = require('../controllers/Categoria');
const {Router} = require('express');

const categoria_router = Router();

categoria_router.post('/categoria', CategoriaRutas.crearCategoria);

module.exports = {
  //categoria_router:categoria_router
  categoria_router
}
