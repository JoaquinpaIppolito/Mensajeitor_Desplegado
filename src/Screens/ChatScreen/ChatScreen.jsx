import React, {useState, useEffect} from 'react'
import { ChatHeaderInfo, ListaMensajes, MensajeForm } from '../../Components/Chat'
import './ChatScreen.css'
import { ListaHeaderInfo } from '../../Components/ListaContactos/ListaHeaderInfo/ListaHeaderInfo'
import { ContactosLista } from '../../Components/ListaContactos/ContactosLista/ContactosLista'
import { useParams } from 'react-router-dom'
import { DATA_MOOK } from '../../../public/DATA_MOOK'
 

const obtenerContactos = () => {
  let contactos = localStorage.getItem('MOOK')
  return JSON.parse(contactos)
}

const agregarContactos = (contactos) => {
  localStorage.setItem('MOOK', JSON.stringify(contactos))
}


if (obtenerContactos() === null) {
  agregarContactos(DATA_MOOK)
}



export const ChatScreen = () => {
    
  
    const {id} = useParams()
    
    const [contactoActivo, setContactoActivo] = useState();

    useEffect(() => {
        const contactos = obtenerContactos()
        if (contactos) {
        const contacto = contactos.find(contacto => contacto.id === Number(id));
        setContactoActivo(contacto);
      }
      }, [id]);


      const handleSubmitNuevoMensaje = (nuevomsje) => {
        const nuevoMensaje = {
          author: 'yo',
          text: nuevomsje,
          estado: 'recibido',
          day: 'hoy',
          hour: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
        };

        setContactoActivo(contactoPrevio => {
          const nuevosMensajes = [...contactoPrevio.mensajes, nuevoMensaje]
          const contactoActualizado = { ...contactoPrevio, mensajes: nuevosMensajes }
    
          const contactos = obtenerContactos()
          const index = contactos.findIndex(contacto => contacto.id === Number(id))
          contactos[index] = contactoActualizado
          agregarContactos(contactos)
    
          return contactoActualizado
        })
      }

      
      if (!contactoActivo) {
        return console.log('Error')
      }
      else{


  return (
  
    <>
    <div className='contenedorlistadocontactos'>
        <div className='headercontactos'>
            <ListaHeaderInfo/>
        </div>
        <div className='listadocontactos'>
            <ContactosLista lista_contactos={obtenerContactos()}/>
        </div>
    </div>

    <div className='chatcontenedor'>
        <div className='header'>
            <ChatHeaderInfo contactodata={contactoActivo}/>
        </div>
        <div className='chat'>
            <ListaMensajes lista_mensaje={contactoActivo ? contactoActivo.mensajes : []}/>
        </div>
        <div className='footer'>
        <MensajeForm handleSubmitNuevoMensaje={handleSubmitNuevoMensaje}/>
        </div>  
        </div>
    </>
  )
}
}


