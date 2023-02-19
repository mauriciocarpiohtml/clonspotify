import { useState, useContext } from 'react'
import './App.css'
import SpotifyContext from './context/MyContext'
import Inicio from './pages/Inicio'

function App() {
  
// const {hola} = useContext(SpotifyContext)

  return (
    <div className='w-full'>
        <Inicio/>
    </div>
  )
}

export default App
