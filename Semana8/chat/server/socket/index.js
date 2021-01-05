const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const misRutas = require('./routes');
const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
app.use(misRutas);

io.on('connect', (socket)=>{
  console.log("Usuari@ conectad@");

  socket.on('join', ({name}) => {
    if (error){
      console.log({error})
    }
    console.log(name)
  })
})


server.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})