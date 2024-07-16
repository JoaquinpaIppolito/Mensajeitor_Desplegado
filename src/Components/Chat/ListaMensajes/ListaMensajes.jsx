import React from 'react'
import { Mensaje } from '../Mensaje/Mensaje'
import './ListaMensajes.css'
import { useParams } from 'react-router-dom'



/* Hace el mapeo, es la lista de chats */
export const ListaMensajes = ({ lista_mensaje }) => {
  
  
  
  return (
      <>
      {lista_mensaje.map((item_mensaje) => <Mensaje mje={item_mensaje} />)}

      </>
  )
}



