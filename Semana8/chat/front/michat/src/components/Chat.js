import React, {useState, useEffect} from 'react'
import io from 'socket.io-client';


const ENDPOINT = 'http://localhost:5000/';
let socket;

export default function Chat() {

  useEffect(() => {
    console.log('useEffect')
    socket = io(ENDPOINT);

    socket.emit('join', 'Rolando')
  },[])

  return (
    <div>
      Hola
    </div>
  )
}
