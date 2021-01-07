const {Router} = require('express');
const routerProductos = require('./Producto');
const routerCulqi = require('./Culqi');
const mainRouter = Router();

mainRouter.get('/', (req, res) => res.status(200).send({message: 'Servidor Funcionando'}));
mainRouter.use(routerProductos);
mainRouter.use(routerCulqi);

module.exports = mainRouter;