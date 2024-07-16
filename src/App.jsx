import React from 'react'
import { ChatScreen } from './Screens'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ChatHeaderInfo, ListaMensajes, Mensaje } from './Components/Chat'




function App() {

  return (
  <>
<Routes>
    <Route path='/' element={<Navigate to="/chat/0"/>} />
    <Route path='/chat/:id' element={<ChatScreen/>}/>
    
    
</Routes>
  </>
  )
}
export default App