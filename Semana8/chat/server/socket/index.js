const http = require("http");
const express = require("express");
const cors = require("cors");
const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");
const misRutas = require("./routes");
const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

app.use(cors());
app.options("*", cors());
app.use(misRutas);

io.on("connect", (socket) => {
  console.log("Usuari@ conectad@");

  //Mensaje de bienvenida
  socket.on("join", ({ name, room }, callback) => {
    console.log({name, room})
    //cada vez que un usuario se conecta el callback de "connect" me va a devolver un socket
    //este socket contiene la información de la conexión incluyendo un Id
    const {error, user} = addUser({id:socket.id, name, room });

    if(error){
      return callback(error);  
    } 

    socket.join(room);

    socket.emit('message', {user: 'admin', text:`${user.name}, Bienvenid@ a la sala ${user.room}`});
    socket.broadcast.to(user.room).emit('message', {user:'admin', text:`${user.name} Se unio a la sala!`});

    callback();
  });

  //va a ser el evento por el cual yo voy a recibir un mensaje y lo voy a reenviar
  socket.on('sendMessage', (message, callback) => {
    const miUser = getUser(socket.id);
   
    io.to(miUser.room).emit('message', {user:miUser.name, text:message});

    callback();
  })
});

server.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
