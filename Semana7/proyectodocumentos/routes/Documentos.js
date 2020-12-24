const express = require('express');
// importar valor por referencia, recuerden que en controllers estoy exportando un objeto, lo estamos destructurando
const {
  getDocumentos,
  crearDocumentos,
  getDocumentoById,
  actualizarDocumento,
  borrarDocumento} = require('../controllers/Documentos');

const documentos_router = express.Router();

// documentos.get('/ruta', (req, res) => {})
documentos_router.get('/documentos', getDocumentos);
documentos_router.post('/documentos',crearDocumentos);
documentos_router.get('/documento/:id_documento', getDocumentoById)
documentos_router.put('/documento/:id_documento', actualizarDocumento)
documentos_router.delete('/documento/:id_documento',borrarDocumento)

module.exports = {
  documentos_router
}