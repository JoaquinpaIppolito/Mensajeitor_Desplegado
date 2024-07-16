import React from 'react'
import './ChatHeaderInfo.css'
import { useParams } from 'react-router-dom'
import { DATA_MOOK } from '../../DATA_MOOK'



export const ChatHeaderInfo = ({contactodata}) => {
const {nombre, id, mensajes,thumbnail,ultima_conexion} = contactodata



  
  return (
    <div className='headercontenido'>
      <div className='left'>
        <img className='fotoperfil' src={thumbnail} alt="foto de perfil" />
          <div className='nombreyestado'>
            <h2 className='nombre'>{nombre}</h2>
            <span className='contactoestado' name='contactoestado'>En Linea</span>
          </div>
      </div>
      <div className='right'>
        <div className='camaramarco'>
          <span className='camara'><i class="bi bi-camera-video-fill"></i></span>
          <span className='flechaabajo'><i class="bi bi-chevron-down"></i></span>
        </div>
        <span className='lupa'><i class="bi bi-search"></i></span>
        <span className='mas'><i class="bi bi-three-dots-vertical"></i></span>   
        </div>
      </div>
  )
}
