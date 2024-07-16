import React from 'react'
import './Mensaje.css'


/* Globo del chat */
export const Mensaje = ({mje}) => {
  const {author,text,estado,day,hour} = mje
  
  let colorFondo
  let direccionMensaje
  let palomitaestado
  let colorpalomita

  if(author === 'yo'){
    colorFondo='#D9FDD3'
    direccionMensaje = 'end'
  }
  else{
    colorFondo='#FFFFFF'
    direccionMensaje = 'start'
  }

  if (estado=== 'visto'){
    palomitaestado="bi bi-check-all"
    colorpalomita='#3FA2F6' 
  }
  else if (estado==='recibido'){
    palomitaestado="bi bi-check-all"
    colorpalomita='#ACC5B7'
  }
  else if(estado==='enviado'){
    palomitaestado="bi bi-check"
    colorpalomita='#ACC5B7'
  }


  return(
    <div className='cajamensaje' style={{justifyContent: direccionMensaje}} >
<div className='cuerpomensaje'style={{backgroundColor: colorFondo}}>
  <p className='textomensaje'>
    {text}
  </p>
  <div className='infoinferior'>
  <span className='fecha'>
    {hour}
</span>
<span className='estado' style={{color:colorpalomita}}><i class={palomitaestado}></i></span>
  </div>
</div>
</div>
  )




}



