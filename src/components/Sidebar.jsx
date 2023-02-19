
import { enlaces } from '../utilities/variables'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
 


function Sidebar() {
    const [menuMobile, setMenuMobile] = useState(false)
  return (
    <div className='md:w-[20%]'>
      <div className=' md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#13101b] h-[100vh] fixed'>
      {enlaces.map((enlace=>
        <NavLink 
        key={enlace.nombre}
        to={enlace.to} 
        className={({ isActive}) =>
        isActive? 'text-cyan-500  flex justify-start items-center my-5 text-sm font-medium uppercase hover:font-bold' : ' flex justify-start items-center my-5 text-sm font-medium text-gray-500 hover:text-cyan-500 uppercase'}>
        <enlace.icon className='h-6 w-6 mr-2'/>    
        {enlace.nombre}
        </NavLink>

        ))}
    </div>
    </div>
    
  )
}

export default Sidebar
