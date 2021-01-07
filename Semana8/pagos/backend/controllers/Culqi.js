const axios = require('axios');

module.exports = {
  comprar: async (req, res) => {
    try {
      let cargo = await axios.post(
        "http://api.culqi.com/v2/charges",
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
      console.log({cargo})
    } catch (error) {
      console.log(error)
    }
  },
};
