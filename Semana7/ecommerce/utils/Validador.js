const jwt = require('jsonwebtoken');

let verificarToken = (token) => {
  try{
   /**
    * Vamos a verificar si el token recibido cumple ciertas condiciones como:
    *   1. Cumple cierto tiempo de vida
    *   2. Si el secret es correcto y si esta en el formato adecuado,
    *   3. Si el secret es exactamente Igual al que se utilizó para hacer el token
    */
    let resultado = jwt.verify(token, 'ecommerce', {algorithm:'RS256'});
    //si todo va relativamente bien, nos devolvera el payload completo
    console.log("verificarToken", resultado);
    return resultado;
  }catch(error){
    console.log("verificarTokenErr", error);
    return null;
  }
}

let wachiman = (req, res, next) => {
  console.log(req.headers)
}

module.exports = {
  wachiman
}