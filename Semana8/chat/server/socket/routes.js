const {Router} = require('express');

const misRutas = Router();

misRutas.get('/', (req, res) => {
  res.send({
    ok:true,
    message: "Servidor corriendo"
  }).status(200)
})

module.exports = misRutas;