import { useEffect, useState } from 'react'
import CancionCard from '../components/CancionCard'
import Loading from './Loading'
import { opcionesFetch } from '../utilities/fetch'


function TendenciasLista() {
    const [tendencias, setTendencias] = useState([])
    const [cargandoTendencias, setCargandoTendencias] = useState(true)
     useEffect(()=>{
         async function consultarTendencias(){
             const url = 'https://shazam-core.p.rapidapi.com/v1/charts/country?country_code=AR'
             const respuesta = await fetch(`${url}`, opcionesFetch)
             const resultado = await respuesta.json()
             setTendencias(resultado)
             setCargandoTendencias(false)
         }
         consultarTendencias()
        
     },[])
  return (
    <>
      <h3 className='font-bold text-white mx-auto uppercase text-xl'>Top argentina</h3>
      {cargandoTendencias ? ( 
        <Loading/>
      ) : (
        <div className='p-3 mt-3  flex flex-row flex-wrap gap-3 md:gap-5 justify-center items-center'>
            {tendencias?.map((cancion => 
                            <CancionCard 
                            key={cancion.key}
                            cancion={cancion}/>))}
        </div>
      )} 
    </>

  )
}

export default TendenciasLista




    