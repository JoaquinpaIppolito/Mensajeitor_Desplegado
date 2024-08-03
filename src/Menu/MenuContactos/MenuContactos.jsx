import React, { useState } from 'react'
import './MenuContactos.css'
import { FaUserGroup } from 'react-icons/fa6';
import { PiBroadcast } from 'react-icons/pi';
import { IoChatbubbleEllipsesOutline, IoExitOutline } from 'react-icons/io5';
import { RiChatNewLine } from 'react-icons/ri';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';

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
          <li><FaUserGroup /></li>
          <li><PiBroadcast /></li>
          <li><IoChatbubbleEllipsesOutline /></li>
          <Link to={`/`}><li><IoExitOutline /></li></Link>
        </ul>
      </div>
    </div>
  );
};

export default MenuContactos;

