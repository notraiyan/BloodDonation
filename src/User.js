import React from 'react';
import './Home.css';
import boy from './boy.jpg';
const user= 'Raiyan Ahmed';
const image=boy;

function User() {
  return (
    <div class="topnav">
        <img src={image} className="dp" /><label className="name">{user}</label>
        
    </div>
  );
}

export default User;