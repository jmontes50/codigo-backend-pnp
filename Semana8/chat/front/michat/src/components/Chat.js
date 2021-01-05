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

    socket.emit('join', {name:user, room}, (rpta)=>{
      console.log({name, room})
      console.log(rpta)
    })

  },[ENDPOINT, location.search])

  useEffect(()=>{
    socket.on('message', (message) => {
      setMessages(messages => [...messages, message])
    })
  },[])

  const sendMessage = (e) => {
    e.preventDefault();
    if(message){
      socket.emit('sendMessage', message, () => {setMessage('')})
    }
  }    

  return (
    <div>
      Hola
      {JSON.stringify(messages)}


      <input type="text" value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
      <button onClick={(e)=>{sendMessage(e)}}>Enviar</button>
    </div>
  )
}
