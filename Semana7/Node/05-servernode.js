const http = require('http');

// createServer me permite crear el servidor http
// req = request(petición), res = response(respuesta)
http.createServer((req, res)=>{
  // res.writeHead(404, {'Content-type':'text/plain'})
  res.writeHead(404, {'Content-type':'text/html'})
  res.write('<h1>Hola es un error</h1>');
  res.end();
  // necesito una manera de escuchar las peticiones
}).listen(5000,()=>{
  console.log(`El servidor esta funcionando`);
});