// Aquí definiremos los controladores encargados de recibir mediante una ruta especifica y manejar el comportamiento según la ruta
//Aquí realmente recibiremos los request y los response
//req, res => Next Function
let documentos = [];

const getDocumentos = (req, res) => {
  let respuesta = res.status(200).json({
    ok: true,
    content: documentos,
    message: null
  });
  return respuesta;
}

const crearDocumentos = (req, res) => {
  // console.log(req.body)
  documentos.push(req.body);
  return res.json({
      ok:true,
      message: 'Se agrego exitosamente el nuevo documento',
      content: documentos
  })
}

const getDocumentoById =  (req, res) => {
  // console.log(req.params);
  let {id_documento} = req.params;
  
  if(id_documento < documentos.length){
    // si la longitud de mi arreglo es mayor que el id documento si existe el documento.
    return res.json({
      ok:true,
      content:documentos[id_documento],
      message:null
    })
  }else{
    return res.status(404).json({
      ok:false,
      content:null,
      message:'El documento no existe'
    })
  }
}

// Las funciones, variables, clases que tengamos hay que exportarlas en caso de necesitarlas en otro archivo
module.exports = {
  getDocumentos,
  crearDocumentos,
  getDocumentoById
}