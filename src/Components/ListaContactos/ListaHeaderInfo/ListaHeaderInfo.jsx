import React from 'react'
import './ListaHeaderInfo.css'
import MenuContactos from '../../../Menu/MenuContactos/MenuContactos'
import { FaUserGroup } from 'react-icons/fa6'
import { PiBroadcast } from 'react-icons/pi'
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5'
import { RiChatNewLine } from 'react-icons/ri'



export const ListaHeaderInfo = () => {

  const nombreUsuario = localStorage.getItem('usuario')
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
        <RiChatNewLine className='nuevochat' />
        <MenuContactos />
      </div>
    </div>
  )
}
