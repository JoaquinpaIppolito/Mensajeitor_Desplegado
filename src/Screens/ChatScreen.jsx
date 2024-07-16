import React, {useState} from 'react'
import { ChatHeaderInfo, ListaMensajes, MensajeForm } from '../Components/Chat'
import './ChatScreen.css'
import { ListaHeaderInfo } from '../Components/ListaContactos/ListaHeaderInfo/ListaHeaderInfo'
import { ContactosLista } from '../Components/ListaContactos/ContactosLista/ContactosLista'
import { Route, useParams } from 'react-router-dom'
import { DATA_MOOK } from '../Components/DATA_MOOK'
 




export const ChatScreen = () => {
    

    
    const {id} = useParams()
    console.log(id)

    const contacto = DATA_MOOK.find(contacto => contacto.id === Number(id))

    console.log(contacto)


    const [nuevoMensajeInfo, setNuevoMensajeInfo] = useState(contacto.mensajes)
    
    const handleSubmitNuevoMensaje = (nuevomsje) => {
        setNuevoMensajeInfo([...nuevoMensajeInfo,{
            author: 'yo',
            text: nuevomsje,
            estado: 'recibido',
            day: 'hoy',
            hour: '13:45',
        }])
        }

  return (
  
    <>
    <div className='contenedorlistadocontactos'>
        <div className='headercontactos'>
            <ListaHeaderInfo/>
        </div>
        <div className='listadocontactos'>
            <ContactosLista lista_contactos={DATA_MOOK}/>
        </div>
    </div>

    <div className='chatcontenedor'>
        <div className='header'>
            <ChatHeaderInfo contactodata={contacto}/>
        </div>
        <div className='chat'>
            <ListaMensajes lista_mensaje={nuevoMensajeInfo} lista_mensaje1={contacto.mensajes}/>
        </div>
        <div className='footer'>
        <MensajeForm handleSubmitNuevoMensaje={handleSubmitNuevoMensaje}/>
        </div>  
    </div>
    </>
  )
}


