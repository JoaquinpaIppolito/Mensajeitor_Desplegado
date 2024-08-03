import React from 'react'
import './MensajeForm.css'
import { BsEmojiLaughing } from 'react-icons/bs'
import { IoAddOutline } from 'react-icons/io5'
import { MdSend } from 'react-icons/md'

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
    <BsEmojiLaughing className='emoji' />
    <IoAddOutline className='signomas'/>
    <input className='nuevomensaje' type='text' name='nuevomje' placeholder='Escribe un mensaje'/>
    <button className='botonenviar' type='submit'><MdSend /></button>
    </form>
  
  )
}

