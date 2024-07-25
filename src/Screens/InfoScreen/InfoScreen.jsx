import React from 'react'
import './InfoScreen.css'
import { useNavigate } from 'react-router-dom'

const InfoScreen = () => {

const navigate = useNavigate();




  return (
    <div className='infocontenedor'>
        <div className='fotoperfilgrande'>
            <div className='headerinfo'>
                <button className='close' onClick={() => navigate(-1)} type='submit'><i class="bi bi-x-lg"></i></button>
                <span className='infoinfo'>Info de contacto</span>
            </div>
        <img className='fotogrande' src='/images/messi.png' alt="imagen perfil" />
        <h1 className='nombreperfil'>Nombre</h1>
        <span className='telefonoperfil'>+54 9 11 20222022</span>
        </div>
        <div className='info'>
            <span className='infotext'>Info.</span>
            <span className='infofrase'>Frase Aca!</span>
        </div>
        <div className='archivos'>
            <span className='textoarchivos'>Archivos, enlaces y documentos</span>
            <span className='signoarchivos'>0 <i class="bi bi-chevron-right"></i></span>
        </div>
        <div className='otros'>
            <div className='destacados'>
        <span><i class="bi bi-star-fill"></i></span>
        <span>Mensajes destacados</span>
        <span><i class="bi bi-chevron-right"></i></span>
            </div>
            <div className='silenciar'>
            <span><i class="bi bi-bell-fill"></i></span>
            <span>Silenciar notificaciones</span>
            </div>
            <div className='temporales'>
            <span><i class="bi bi-stopwatch-fill"></i></span>
            <span>Mensajes temporales</span>
                <span><i class="bi bi-chevron-right"></i></span>
            </div>
            <div className='cifrado'>
                <span><i class="bi bi-lock-fill"></i></span>
                <span>Cifrado</span>

            </div>
        </div>
    </div>
  )
}

export default InfoScreen


