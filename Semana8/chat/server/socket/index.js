const http = require('http');
const express = require('express');
const cors = require('cors');

const misRutas = require('./routes');
const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*'
  }
})

app.use(cors());
app.options('*', cors());
app.use(misRutas);

io.on('connect', (socket)=>{
  console.log("Usuari@ conectad@");

  socket.on('join', ({name, room}, callback)=>{
    console.log(name)
    console.log(room)
    return callback("esto viene desde el backend")
  })
})

server.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})