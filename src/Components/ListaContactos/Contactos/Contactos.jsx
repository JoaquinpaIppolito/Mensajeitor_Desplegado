import React from 'react'
import './Contactos.css'
import { Link } from 'react-router-dom'



/* Globo de cada contacto */
export const Contactos = ({cttos}) => {
  const {nombre,thumbnail,id,mensajes} = cttos

  let ultimoMensaje = 'No hay mensajes aun'
  let ultimaFecha = ''
  if (mensajes && mensajes.length >0){
  ultimoMensaje = mensajes[mensajes.length-1].text 
  ultimaFecha = mensajes[mensajes.length-1].hour
}



  return(
    
    <div className='cajacontacto'>
      <Link to={`/chat/${id}`}>
<div className='cuerpocontacto'>
<img className='fotoperfilcontactos' src={thumbnail} alt={`foto de perfil de ${nombre}`} />
  <div className='nombreyultimomensaje'>
<h2 className='nombrecontacto'>
    {nombre}
  </h2>
  <p className='ultimomensaje'>{ultimoMensaje}</p>
  </div>
  <span className='fechacontacto'>
    {ultimaFecha}
</span>
</div>
</Link>
</div>

  )




}


