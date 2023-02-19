
import Sidebar from '../components/Sidebar'
import TendenciasLista from '../components/TendenciasLista'
import { useContext } from 'react'
import SpotifyContext from '../context/MyContext'
import Reproductor from '../components/Reproductor'

function Tendencias() {
    const {reproductor} = useContext(SpotifyContext)
  return (
    
    <div className='md:flex'>
      <div className='md:w-[20%]'>
        <Sidebar/>
      </div>
      <div className='md:w-[80%] mt-10 '>
        <TendenciasLista/>
            <div className=' fixed bottom-0 w-full z-10 left-0 right-0  '>
                {reproductor && <Reproductor/>}
            </div> 
      </div>
    
    </div>
    
  )
}

export default Tendencias
