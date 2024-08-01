import React, { useState } from 'react'
import './MenuContactos.css'

const MenuContactos = () => {
  const [estaAbierto, setestaAbierto] = useState(false);

  const toggleMenu = () => {
    setestaAbierto(!estaAbierto);
  };

  return (
    <div className="menu-contactos-contenedor">
      <div className={`iconohamburguesa ${estaAbierto ? 'abierto' : ''}`} onClick={toggleMenu}>
      <i class="bi bi-list"></i>
      </div>
      <div className={`menu ${estaAbierto ? 'open' : ''}`}>
        <ul>
          <li><i class="bi bi-people"></i></li>
          <li><i class="bi bi-broadcast"></i></li>
          <li><i class="bi bi-chat-quote"></i></li>
          <li><i class="bi bi-file-earmark-plus"></i></li>
        </ul>
      </div>
    </div>
  );
};

export default MenuContactos;