import React from 'react'
import Generos from '../components/Generos'
import ListaCanciones from '../components/ListaCanciones'
import Reproductor from '../components/Reproductor'
import { useContext } from 'react'
import SpotifyContext from '../context/MyContext'
import Sidebar from '../components/Sidebar'

function Inicio() {
    const {reproductor} = useContext(SpotifyContext)

  return (
    <div className='md:flex'>
      
        <Sidebar/>
      
      <div className='md:w-[80%] mt-10'>
        <Generos/>
         <ListaCanciones/>
        <div className=' fixed bottom-0 w-full z-10 left-0 right-0  '>
          {reproductor && <Reproductor/>}
        </div> 
      </div>
    
    </div>
  )
}

export default Inicio
