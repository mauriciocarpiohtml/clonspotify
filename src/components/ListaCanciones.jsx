import { useEffect, useContext, useState } from 'react'
import CancionCard from '../components/CancionCard'
import SpotifyContext from '../context/MyContext'
import { opcionesFetch } from '../utilities/fetch'
import Loading from './Loading'

function ListaCanciones() {
    const {genero, canciones, setCanciones} = useContext(SpotifyContext)
    const [cargandoCanciones, setCargandoCanciones] = useState(true)
     useEffect(()=>{
         async function mostrarCanciones(){
             const url = `https://shazam-core.p.rapidapi.com/v1/charts/genre-world?genre_code=${genero}`
             const respuesta = await fetch(`${url}`, opcionesFetch)
             const resultado = await respuesta.json()
             setCanciones(resultado)
             setCargandoCanciones(false)
             }
         mostrarCanciones()
     },[genero])
  return (
    <>
    
    {cargandoCanciones ? (
      <Loading/>
    ): (<div className=' p-3 mt-3  flex flex-row flex-wrap gap-3 md:gap-5 justify-center items-center'>
         {canciones?.map((cancion=> 
          <CancionCard
            key={cancion.key} 
            cancion={cancion}/> ))}
       </div> )}
    </>
  )
}

export default ListaCanciones
