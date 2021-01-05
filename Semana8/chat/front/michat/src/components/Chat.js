import React, {useState, useEffect} from 'react'
import io from 'socket.io-client';
import queryString from 'query-string';

const ENDPOINT = 'http://localhost:5000/';
let socket;

export default function Chat({location}) {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const {user, room} = queryString.parse(location.search)
    socket = io(ENDPOINT);
    setRoom(room);
    setName(user);

    socket.emit('join', {name, room}, (rpta)=>{
      console.log(rpta)
    })

  },[])

  return (
    <div>
      Hola
    </div>
  )
}
