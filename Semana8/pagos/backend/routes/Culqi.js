const {Router} = require('express');
const {comprar} = require('../controllers/Culqi');

const routerCulqi = Router();

routerCulqi.post('/comprar', comprar);

module.exports = routerCulqi;
