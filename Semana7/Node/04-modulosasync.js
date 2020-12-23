const fs = require('fs');

fs.writeFile('./hola.txt','Hola soy un desarrollador!',()=>{
  console.log("Yo me ejecuto al finalizar la escritura del .txt");
})

console.log("Yo estoy mas abajo que la escritura de mi archivo");