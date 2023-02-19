
import { genres } from '../utilities/variables'
import SpotifyContext from '../context/MyContext'
import { useContext } from 'react'

function Generos() {
  // 
    const {setGenero} = useContext(SpotifyContext)
  return (
    
       <div className='mx-auto '>
          <div className='flex flex-col md:flex-row md:justify-between gap-3 w-full'>
              <h3 className='font-bold text-white mx-auto uppercase  text-xl'>Descubrir</h3>
              <select
              onChange={(e) => setGenero(e.target.value)} 
              className=' cursor-pointer  p-3 bg-black text-gray-300 text-base rounded-lg outiline-none  lg:w-[13%] sm:w-[50%] mx-auto '>
                  {genres.map((genre=>
                      <option
                      key={genre.value}
                      value={genre.value}>{genre.title}</option>))}
              </select>
          </div>
        </div>
    
   
  )
}

export default Generos
