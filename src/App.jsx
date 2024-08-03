import React from 'react'
import { ChatScreen } from './Screens'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import InfoScreen from './Screens/InfoScreen/InfoScreen'




function App() {

  return (

    <Routes>
      <Route path='/' element={<HomeScreen />} />
      <Route path='/info/:id' element={<InfoScreen />} />
      <Route path='/chat/:id' element={<ChatScreen />} />


    </Routes>

  )
}
export default App



{/* <Routes>
    <Route path='/' element={<Navigate to="/chat/0"/>} />
    <Route path='/chat/:id' element={<ChatScreen/>}/>
    
    
</Routes> */}