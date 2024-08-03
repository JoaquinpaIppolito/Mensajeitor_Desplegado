import React from 'react'
import './ChatHeaderInfo.css'
import { Link } from 'react-router-dom'
import { BsCameraVideoFill } from 'react-icons/bs'
import { FaChevronDown } from 'react-icons/fa6'
import { BiSearchAlt } from 'react-icons/bi'
import { TiInfoLargeOutline } from 'react-icons/ti'




export const ChatHeaderInfo = ({ contactodata }) => {
  const { nombre, id, mensajes, thumbnail, ultima_conexion } = contactodata




  return (
    <div className='headercontenido'>
      <Link to={`/info/${id}`}>
        <div className='left'>
          <img className='fotoperfilchatheader' src={thumbnail} alt={`foto de perfil de ${nombre}`} />
          <div className='nombreyestado'>
            <h2 className='nombre'>{nombre}</h2>
            <span className='contactoestado' name='contactoestado'>En Linea</span>
          </div>
        </div>
      </Link>
      <div className='right'>
        <div className='camaramarco'>
          <BsCameraVideoFill className='camara' />
          <FaChevronDown className='flechaabajo' />
        </div>
        <BiSearchAlt className='lupa' />
        <Link to={`/info/${id}`}>
        <TiInfoLargeOutline className='infoscreenicon' />
        </Link>
      </div>
    </div>
  )
}
