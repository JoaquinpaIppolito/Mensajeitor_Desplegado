import React from 'react'
import './Contactos.css'
import { Link, useParams } from 'react-router-dom'



/* Globo de cada contacto */
export const Contactos = ({cttos}) => {
  const {nombre,thumbnail,ultima_conexion,id,mensajes} = cttos



  return(
    
    <div className='cajacontacto'>
      <Link to={`/chat/${id}`}>
<div className='cuerpocontacto'>
<img className='fotoperfilcontactos' src={thumbnail} alt={`foto de perfil de ${nombre}`} />
  <div className='nombreyultimomensaje'>
<h2 className='nombrecontacto'>
    {nombre}
  </h2>
  <p className='ultimomensaje'>Ultimo Mensaje Aca!</p>
  </div>
  <span className='fechacontacto'>
    {ultima_conexion}
</span>
</div>
</Link>
</div>

  )




}


