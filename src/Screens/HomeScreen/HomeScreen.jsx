import React, { useState } from 'react'
import './HomeScreen.css'
import { useNavigate } from 'react-router-dom'


const HomeScreen = () => {

const navigate = useNavigate();
const [error, seterror] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        const usuario = e.target.nuevousuario.value;
        if (usuario !== ''){
        localStorage.setItem('usuario',usuario)
        navigate('/chat/0');
        error = ''
        e.target.reset()
      }
      else{
        seterror('Introduzca un nombre de usuario!')
      }
    }


  return (
    <div className='fondo'>
        <div className='logocontenedor'>
            <h1><i class="bi bi-whatsapp"></i></h1><span>WHATSAPP WEB</span>
        </div>
    <div className='homecontenedor'>
        <div className='homeheader'>
        <img className='laptop' src='/images/imagenlaptop.png' alt="imagen laptop" />
            <div className='tituloydescripcion'>
            <h1 className='titulo'>Comenzar a usar Whatsapp</h1>
            </div>
        </div>
        <div className='home'>
            <form onSubmit={handleSubmit} className='forminiciar'>
            <span className='descripcion1'>Escribe tu nombre de usuario:</span>
            <br></br>
            <input className='nuevousuario' name='nuevousuario' type='text' placeholder='Ej: Usuario1' maxLength="30" />
            <span className='error'>{error}</span>
            <button className='iniciar' type='submit'>Iniciar</button>
            <br></br>
            </form>
            <span className='version'>Ver 1.0</span>
            </div>   
    </div>
    </div>
  )
}

export default HomeScreen