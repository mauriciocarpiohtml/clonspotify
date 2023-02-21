
import { generosMusica } from '../utilities/variables'
import SpotifyContext from '../context/MyContext'
import { useContext } from 'react'

function Generos() {
    const {setGenero} = useContext(SpotifyContext)
  return (
    
       <div className='mx-auto'>
          <div className='flex flex-col md:flex-row md:justify-between gap-3 w-full'>
              <h3 className='font-bold text-white mx-auto uppercase  text-xl'>Descubrir</h3>
              <select
                  onChange={(e) => setGenero(e.target.value)} 
                  className='cursor-pointer p-3 bg-black text-gray-300 text-base rounded-lg outline-none lg:w-[13%] sm:w-[50%] mx-auto'>
                  {generosMusica.map((genero) => (
                    <option key={genero.value} value={genero.value}>
                      {genero.title}
                    </option>
          ))}

                                        
              </select>
          </div>
        </div>
  )
}

export default Generos
