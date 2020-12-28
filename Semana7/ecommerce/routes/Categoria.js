const {
        crearCategoria,
        obtenerCategorias,
        obtenerCategoriaPorId,
        actualizarCategoria,
        eliminarCategoria,
        obtenerCategoriaPorNombre
      } = require('../controllers/Categoria');
const {Router} = require('express');
const { Categoria } = require('../config/Sequelize');

const categoria_router = Router();

categoria_router.post('/categoria', crearCategoria);
categoria_router.get('/categoria', obtenerCategorias);
categoria_router.get('/categoria/:id', obtenerCategoriaPorId);
categoria_router.put('/categoria/:id', actualizarCategoria);
categoria_router.delete('/categoria/:id', eliminarCategoria);
categoria_router.get('/categoriapornombre', obtenerCategoriaPorNombre)

module.exports = {
  //categoria_router:categoria_router
  categoria_router
}
