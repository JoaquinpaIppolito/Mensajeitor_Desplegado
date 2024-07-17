import React, {useState, useEffect} from 'react'
import { ChatHeaderInfo, ListaMensajes, MensajeForm } from '../Components/Chat'
import './ChatScreen.css'
import { ListaHeaderInfo } from '../Components/ListaContactos/ListaHeaderInfo/ListaHeaderInfo'
import { ContactosLista } from '../Components/ListaContactos/ContactosLista/ContactosLista'
import { useParams } from 'react-router-dom'
import { DATA_MOOK } from '../Components/DATA_MOOK'
 




export const ChatScreen = () => {
    


    const {id} = useParams()
    
    const [contactoActivo, setcontactoActivo] = useState();

    useEffect(() => {
        const contacto = DATA_MOOK.find(contacto => contacto.id === Number(id));
        setcontactoActivo(contacto);
      }, [id]);
    



      const handleSubmitNuevoMensaje = (nuevomsje) => {
        setcontactoActivo(contactoPrevio => ({
          ...contactoPrevio,mensajes: [
            ...contactoPrevio.mensajes,
            {
              author: 'yo',
              text: nuevomsje,
              estado: 'recibido',
              day: 'hoy',
              hour: '13:45',
            }
          ]
        }
        )
        );
      };

      if (!contactoActivo) {
        console.log('Error')
      }
      else{


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
            <ChatHeaderInfo contactodata={contactoActivo}/>
        </div>
        <div className='chat'>
            <ListaMensajes lista_mensaje={contactoActivo.mensajes}/>
        </div>
        <div className='footer'>
        <MensajeForm handleSubmitNuevoMensaje={handleSubmitNuevoMensaje}/>
        </div>  
    </div>
    </>
  )
}
}


