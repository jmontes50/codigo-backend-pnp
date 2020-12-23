const axios = require('axios');

axios.get('https://reqres.in/api/users?page=1')
.then(rpta => {
  console.log(rpta.data);
  console.log("nuevo cambioooooooooooooooooooooo")
})