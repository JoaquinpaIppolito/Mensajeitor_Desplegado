import React, { useState } from 'react'
import './InfoScreen.css'
import { useNavigate, useParams } from 'react-router-dom'

const InfoScreen = () => {

const navigate = useNavigate();

const toggleOff = "bi bi-toggle2-off"
const toggleOn = "bi bi-toggle2-on"
const [toggle, settoggle] = useState(toggleOff);

const obtenerContactos = () => {
    const contactos = localStorage.getItem('MOOK');
    return JSON.parse(contactos)
  };

  const {id} = useParams()
  const contactos = obtenerContactos();
  const contacto = contactos.find(contacto => contacto.id === Number(id));



  return (
    <div className='infocontenedor'>
        <div className='fotoperfilgrande'>
            <div className='headerinfo'>
                <button className='close' onClick={() => navigate(-1)} type='button'><i class="bi bi-x-lg"></i></button>
                <span className='infoinfo'>Info de contacto:</span>
            </div>
        <img className='fotogrande' src={contacto.thumbnail} alt="imagen perfil" />
        <h1 className='nombreperfil'>{contacto.nombre}</h1>
        <span className='telefonoperfil'>{contacto.telefono}</span>
        </div>
        <div className='info'>
            <span className='infotext'>Info.</span>
            <span className='infofrase'>{contacto.frase}</span>
        </div>
        <div className='archivos'>
            <span className='textoarchivos'>Archivos y documentos</span>
            <span className='signoarchivos'>{contacto.archivos} <i class="bi bi-chevron-right"></i></span>
        </div>
        <div className='otros'>
            <div className='destacados'>
                <div className='destacadosleft'>
                    <span><i className="bi bi-star-fill"></i></span>
                    <span>Mensajes destacados</span>
                </div>
            <span><i className="bi bi-chevron-right"></i></span>
            </div>
            <div className='silenciar'>
                <div className='silenciarleft'>
                    <span><i class="bi bi-bell-fill"></i></span>
                    <span>Silenciar notificaciones</span>
                </div>
                <span className='toggle' onClick={() => settoggle(toggle === toggleOff ? toggleOn : toggleOff)}>
            <i class={toggle}></i>
          </span>
            </div>
            <div className='temporales'>
                <div className='temporalesleft'>
                    <span><i class="bi bi-stopwatch-fill"></i></span>
                    <span>Mensajes temporales</span>
                </div>
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


