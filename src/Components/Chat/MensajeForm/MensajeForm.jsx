import React from 'react'
import './MensajeForm.css'

export const MensajeForm = ({handleSubmitNuevoMensaje}) => {


  const handleSubmit = (e) => {
    e.preventDefault()
    if (e.target.nuevomje.value != ''){
    handleSubmitNuevoMensaje(e.target.nuevomje.value)
    e.target.reset()
  }
}

  

  return (
    <form onSubmit={handleSubmit} className='formnuevomensaje'>
    <span className='emoji'><i class="bi bi-emoji-laughing"></i></span>
    <span className='signomas'><i class="bi bi-plus"></i></span>
    <input className='nuevomensaje' type='text' name='nuevomje' placeholder='Escribe un mensaje' maxlength="80"/>
    <button className='botonenviar' type='submit'><i class="bi bi-send-fill"></i></button>
    </form>
  
  )
}

