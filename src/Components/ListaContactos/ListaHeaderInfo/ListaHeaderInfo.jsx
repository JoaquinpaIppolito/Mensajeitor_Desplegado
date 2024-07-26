import React from 'react'
import './ListaHeaderInfo.css'



export const ListaHeaderInfo = () => {

  const nombreUsuario = localStorage.getItem('usuario')
  return (
    <div className='headercontenido1'>
      <div className='left1'>
        <img className='fotoperfil1' src='/images/fotoperfil.png' alt="foto de perfil" />
        <span>{nombreUsuario}</span>
      </div>
      <div className='right1'>
        <span className='comunidad'><i class="bi bi-people"></i></span>
        <span className='estados'><i class="bi bi-broadcast"></i></span>
        <span className='canales'><i class="bi bi-chat-quote"></i></span>
        <span className='nuevochat'><i class="bi bi-file-earmark-plus"></i></span>
        <span className='menu'><i class="bi bi-three-dots-vertical"></i></span>     
        </div>
      </div>
  )
}
