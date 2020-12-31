const jwt = require("jsonwebtoken");

let verificarToken = (token) => {
  try {
    /**
     * Vamos a verificar si el token recibido cumple ciertas condiciones como:
     *   1. Cumple cierto tiempo de vida
     *   2. Si el secret es correcto y si esta en el formato adecuado,
     *   3. Si el secret es exactamente Igual al que se utilizó para hacer el token
     */
    let resultado = jwt.verify(token, "ecommerce", { algorithm: "RS256" });
    //si todo va relativamente bien, nos devolvera el payload completo
    console.log("verificarToken", resultado);
    return resultado;
  } catch (error) {
    console.log("verificarTokenErr", error);
    return null;
  }
};

//middleware
let wachiman = (req, res, next) => {
  if (req.headers.authorization) {
    let token = req.headers.authorization.split(" ")[1];
    let verificacion = verificarToken(token);
    if (verificacion) {
      next();
    } else {
      res.status(401).json({
        ok: false,
        message: "No estas autorizado para realizar esta petición",
      });
    }
  }else{
    res.status(401).json({
      ok:false,
      message:'Necesitas estar autenticado para realizar esta petición'
    })
  }
};

module.exports = {
  wachiman,
};
