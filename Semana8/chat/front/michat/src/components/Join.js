import React, {useState} from 'react';
import {Link} from 'react-router-dom';

export default function Join() {
  const [user, setUser] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div>
      <div>
        <label>Usuario</label>
        <input type="text" onChange={(e) => setUser(e.target.value)} value={user}/>
      </div>
      <div>
        <label>Sala</label>
        <input type="text" onChange={(e) => setRoom(e.target.value)} value={room}/>
      </div>
      <Link to={`/chat?user=${user}&room=${room}`}>Ingresar</Link>
    </div>
  )
}
