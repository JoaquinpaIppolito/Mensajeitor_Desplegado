import React from 'react'
import './ListaHeaderInfo.css'
import MenuContactos from '../../../Menu/MenuContactos/MenuContactos'
import { FaUserGroup } from 'react-icons/fa6'
import { PiBroadcast } from 'react-icons/pi'
import { IoChatbubbleEllipsesOutline, IoExitOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'



export const ListaHeaderInfo = () => {

  const navigate = useNavigate();

  const nombreUsuario = localStorage.getItem('usuario') || 'Usuario';

  const handleSalir = () => {
    localStorage.clear();
    navigate('/');
  };


  return (
    <div className='headercontenido1'>
      <div className='left1'>
        <img className='fotoperfil1' src='/images/fotoperfil.png' alt="foto de perfil" />
        <span className='nombreusuario1'>{nombreUsuario}</span>
      </div>
      <div className='right1'>
        <FaUserGroup className='comunidad' />
        <PiBroadcast className='estados' />
        <IoChatbubbleEllipsesOutline className='canales' />
        <button className='exit' onClick={handleSalir} label="Salir">
          <IoExitOutline />
        </button>
        <MenuContactos />
      </div>
    </div>
  )
}
