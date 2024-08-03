import React, { useState } from 'react'
import './MenuContactos.css'
import { FaUserGroup } from 'react-icons/fa6';
import { PiBroadcast } from 'react-icons/pi';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { RiChatNewLine } from 'react-icons/ri';
import { RxHamburgerMenu } from 'react-icons/rx';

const MenuContactos = () => {
  const [estaAbierto, setestaAbierto] = useState(false);

  const toggleMenu = () => {
    setestaAbierto(!estaAbierto);
  };

  return (
    <div className="menu-contactos-contenedor">
      <div className={`iconohamburguesa ${estaAbierto ? 'abierto' : ''}`} onClick={toggleMenu}>
      <RxHamburgerMenu />
      </div>
      <div className={`menu ${estaAbierto ? 'open' : ''}`}>
        <ul>
          <li><FaUserGroup/></li>
          <li><PiBroadcast/></li>
          <li><IoChatbubbleEllipsesOutline/></li>
          <li><RiChatNewLine/></li>
        </ul>
      </div>
    </div>
  );
};

export default MenuContactos;


