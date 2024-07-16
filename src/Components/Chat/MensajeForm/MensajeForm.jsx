import React, { useState } from 'react'
import './MensajeForm.css'
import { ChatScreen } from '../../../Screens'
import { Mensaje } from '../Mensaje/Mensaje'
import { ChatHeaderInfo } from '../ChatHeaderInfo/ChatHeaderInfo'

export const MensajeForm = ({handleSubmitNuevoMensaje}) => {


  const handleSubmit = (e) => {
    e.preventDefault()
    if (e.target.nuevomje.value != ''){
    handleSubmitNuevoMensaje(e.target.nuevomje.value)
    e.target.reset()
  }
}

/*   const [escribiendo, setEscribiendo] = useState('')

  const handleEscribiendo = (e) =>{
    setEscribiendo(e.target.value)
    e.target.reset()
  } */

  

  return (
    <form onSubmit={handleSubmit} className='formnuevomensaje'>
    <span className='emoji'><i class="bi bi-emoji-laughing"></i></span>
    <span className='signomas'><i class="bi bi-plus"></i></span>
    <input className='nuevomensaje' type='text' name='nuevomje' placeholder='Escribe un mensaje'/>
    <button className='botonenviar' type='submit'><i class="bi bi-send-fill"></i></button>
    </form>
  
  )
}

