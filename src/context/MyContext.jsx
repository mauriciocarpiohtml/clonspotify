import {createContext, useState } from "react"

const SpotifyContext = createContext()

function MyContext({children}) {
    
  const [genero, setGenero] = useState('HIP_HOP_RAP')
  const [canciones, setCanciones] = useState([])
  const [cancionActiva, setCancionActiva] = useState({})
  const [reproductor, setReproductor] = useState(false)
  
  const [artista, setArtista] = useState('')
  

  function actualizarArtista(id){
    setArtista(id)
  }

  function activarReproductor (cancion){
    setReproductor(true)
    setCancionActiva(cancion)
  }
  return (
    <SpotifyContext.Provider
    value={{genero, setGenero, canciones, setCanciones, cancionActiva, activarReproductor, reproductor, artista, actualizarArtista}}>
        {children}
    </SpotifyContext.Provider>
  )
}

export default SpotifyContext

export {MyContext}
