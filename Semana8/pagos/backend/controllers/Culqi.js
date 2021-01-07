const axios = require('axios');

module.exports = {
  comprar: async (req, res) => {
    console.log("request",req.body)
    
      try {
        let cargo = await axios.post(
          "https://api.culqi.com/v2/charges",
          {
            currency_code:"PEN",
            //amount
            //email
            //source_id :token
            ...req.body
          },
          {
            headers:{
              "Content-type":"application/json",
              "Authorization":`Bearer sk_test_3vwkjDqGZNdXsW8v`
            }
          }
        )
        console.log("estado peticion",cargo)
      } catch (error) {
        console.log(error)
      }
      // if(cargo.status === 201){
      //   return res.status(201).json({
      //     ok:true,
      //     content:'compra realizada'
      //   })
      // }else{
      //   return res.status(500).json({
      //     ok:false,
      //     content:'Error al hacer la petición'
      //   })
      // }
    
  },
};
