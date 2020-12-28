const {
        crearCategoria,
        obtenerCategorias,
        obtenerCategoriaPorId,
        actualizarCategoria
      } = require('../controllers/Categoria');
const {Router} = require('express');

const categoria_router = Router();

categoria_router.post('/categoria', crearCategoria);
categoria_router.get('/categoria', obtenerCategorias);
categoria_router.get('/categoria/:id', obtenerCategoriaPorId);
categoria_router.put('/categoria/:id', actualizarCategoria);

module.exports = {
  //categoria_router:categoria_router
  categoria_router
}
