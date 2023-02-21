
import { useContext, useEffect, useState } from 'react'
import SpotifyContext from '../context/MyContext'
import { opcionesFetch } from '../utilities/fetch'
import CancionCard from '../components/CancionCard'
import Reproductor from '../components/Reproductor'
import Loading from '../components/Loading'
import Sidebar from '../components/Sidebar'

function Artistas() {

  const {artista, reproductor} = useContext(SpotifyContext)
  const [artistaInfo, setArtistaInfo] = useState([])
  const [cargandoInfo, setCargandoInfo] = useState(true)

  useEffect(()=>{
    async function consultarArtista(){
      const url = `https://shazam-core.p.rapidapi.com/v2/artists/details?artist_id=${artista}`
      const respuesta = await fetch(url, opcionesFetch)
      const resultado = await respuesta.json()
      const data = await resultado.data[0]
      setArtistaInfo(data)
      setCargandoInfo(false)
    }

    consultarArtista()
  },[artista])

  return (
    <>
    <div className='md:flex'>
      <Sidebar/>
    

    <div className='md:w-[80%]'>
    {cargandoInfo ? (
      <Loading/>
    ):(
        <div className=' mt-5 p-3 flex flex-col justify-center items-center'>
            <div className='flex flex-col'>
                <img 
                className= 'rounded-full w-[170px] h-[180px] 'src={artistaInfo?.avatar}/>
                <h3 className='mt-5 text-xl font-bold text-white'>{artistaInfo.attributes?.name || ''}</h3> 
                <p className='text-sm text-center mt-1 uppercase text-white '>{artistaInfo?.attributes?.bornOrFormed || ''}</p> 
            </div>

              <div className='p-3 mt-3  flex flex-row flex-wrap gap-3 md:gap-5 justify-center items-center '>
              { artistaInfo?.views?.["top-songs"]?.data && artistaInfo.views["top-songs"].data.map((cancion =>
                                                                                                   <CancionCard cancion={cancion} key={cancion.id}/>))}
              </div>  

              <div className=' fixed bottom-0 w-full z-10 left-0 right-0  '>
                  {reproductor && <Reproductor/>}
              </div>
        </div>
       )}
    </div>
    
    </div>
    </>
  )
}

export default Artistas
