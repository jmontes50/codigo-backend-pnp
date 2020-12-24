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

const actualizarDocumento = (req, res) => {
  // necesitamos saber que documento actualizar = req.params
  // necesitamos saber con que información lo vamos a actualizar = req.body
  let {id_documento} = req.params;
  if(documentos.length > id_documento){
    // acá ya válido que mi documento existe
    let data = req.body;
    documentos[id_documento] = data;
    return res.status(200).json({
      ok:true,
      message:"Se actualizo el documento en la BD",
      content:documentos[id_documento]
    })
  }
  else{
    return res.status(404).json({
      ok:false,
      message:`No se encontró el documento con id ${id_documento}`,
      content:null
    })
  }
}

const borrarDocumento = (req, res) => {
  //crear aqui el codiugo que borre el documento y me de una respuesta adecuada
  let {id_documento} = req.params;
  if(documentos.length > id_documento){
    documentos.splice(id_documento,1);
    return res.json({
      ok:true,
      message:'Se elimino el documento satisfactoriamente',
      content:null
    })
  }else{
    return res.status(404).json({
      ok:false,
      message:`No se encontro el documento con el id ${id_documento}`,
      content:null
    })
  }
}

// Las funciones, variables, clases que tengamos hay que exportarlas en caso de necesitarlas en otro archivo
module.exports = {
  getDocumentos,
  crearDocumentos,
  getDocumentoById,
  actualizarDocumento,
  borrarDocumento
}