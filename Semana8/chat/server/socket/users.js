const users = [];

const addUser = ({id, name, room}) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find(user => user.room === room && user.name === name);
  // Si es que realmente recibo en el nombre yt el usuario algo vacio, pues retorno un error
  if(!name || !room){
    return {
      error: 'El usuario y la sala son requeridos'
    }
  }
  //si es que  el usuari@ ya existe
  if(existingUser){
    return {
      error: 'El usuario esta ya ocupado'
    }
  }

  const objUser = {
    //id:id
    id, 
    name, 
    room
  }

  users.push(objUser)
  return {user:objUser} 
}

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if(index !== -1){
    return users.splice(index,1);
  }
}

const getUser = (id) => users.find((user) => user.id = id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom
}