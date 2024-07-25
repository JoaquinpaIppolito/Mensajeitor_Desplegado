import React from 'react'
import './HomeScreen.css'
import { useNavigate } from 'react-router-dom'


const HomeScreen = () => {

const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        const usuario = e.target.nuevousuario.value;
        if (usuario !== ''){
        localStorage.setItem('usuario',usuario)
        navigate('/chat/0');
        e.target.reset()
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
            <h2 className='titulo'>Disfruta WhatsApp</h2>
            <span className='descripcion'>Haz llamadas, comparte pantalla y vive una experiencia mas rapida en esta aplicacion.</span>
            </div>
        </div>
        <div className='home'>
            <h2 className='titulo1'>Comenzar a usar Whatsapp</h2>
            <form onSubmit={handleSubmit} className='forminiciar'>
            <span className='descripcion1'>Escribe tu nombre de usuario:</span>
            <br></br>
            <input className='nuevousuario' name='nuevousuario' type='text' placeholder='Escribe tu nombre de usuario' maxlength="30" />
            <br></br>
            <button className='iniciar' type='submit'>Iniciar</button>
            <br></br>
            </form>
            </div>   
    </div>
    </div>
  )
}

export default HomeScreen