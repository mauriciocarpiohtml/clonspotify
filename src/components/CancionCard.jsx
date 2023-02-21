import { useContext } from "react"
import SpotifyContext from "../context/MyContext"
import { Link } from "react-router-dom"

function CancionCard({cancion}) {
    
    const {activarReproductor, actualizarArtista} = useContext(SpotifyContext) 
    
  return (
    <div className='backdrop-blur-sm bg-white/5 w-[135px] md:w-[200px] h-[240px] md:h-[290px]  flex flex-col  rounded-md p-3 '>
        <div className='rounded-lg relative cursor-pointer' onClick={()=> activarReproductor(cancion)} >
            <img src={cancion.images?.coverart || cancion.images?.coverarthq || cancion?.attributes?.artwork?.url}/>
            <div className='absolute inset-0 bg-black opacity-0 transition-opacity hover:opacity-60 duration-200 ease-in-out'></div>
        </div>
        <div className='flex flex-col justify-start mt-3 w-full'>
            <p className='text-white text-sm md:text-md font-bold text-left '>{cancion.title || cancion.attributes.albumName} </p>
             <Link to={cancion.artists && cancion.artists.length > 0 ? `/artistas/${cancion?.artists[0]?.adamid}` :'artistas/:undefined'}> 
                <p
                  onClick={cancion.artists && cancion.artists.length > 0 ? ()=> actualizarArtista(cancion?.artists[0]?.adamid) : ()=> actualizarArtista('')} 
                  className='text-white mt-1 md:text-md font-black cursor-pointer text-left text-xs uppercase hover:text-cyan-400 '> {cancion.artists && cancion.artists.length > 0 ? cancion.artists[0].alias : ''}</p>
             </Link> 
            
            
        </div>
      
    </div>
  )
}

export default CancionCard
