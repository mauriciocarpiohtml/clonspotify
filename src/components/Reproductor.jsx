import { useContext, useRef, useEffect } from "react"
import SpotifyContext from "../context/MyContext"
import '../App.css'

function Reproductor() {
  const {cancionActiva} = useContext(SpotifyContext)
  
  const audioRef = useRef(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [cancionActiva]);

  
  return (
    <div className="backdrop-blur-sm bg-black/40 h-[100px] md:h-[130px] border-2 flex justify-between p-3 ">
      <div className="flex justify-start items-center gap-3 md:gap-5 w-[45%] md:w-[60%]">
        <img src={cancionActiva?.images?.coverart || cancionActiva.images?.coverarthq || cancionActiva?.attributes?.artwork?.url} 
        alt={cancionActiva?.title} 
        className='rounded-full h-[70%] md:h-full rotate-image'/>
        <p className="text-white font-semibold text-xs md:text-base text-center md:uppercase">{cancionActiva.title ? cancionActiva?.title : cancionActiva?.attributes?.name} - {cancionActiva?.subtitle || cancionActiva?.attributes?.name}</p>
      </div>
      <div className="flex justify-center items-center w-[50%] md:w-[40%]">
         <audio
          ref={audioRef} controls>
          <source src={cancionActiva?.hub?.actions[1]?.uri || cancionActiva.attributes.previews[0].url} />
        </audio> 
      </div>
      
      
    </div>
  )
}

export default Reproductor
