
import { enlaces } from '../utilities/variables'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BsListNested } from "react-icons/bs";
import { BsFillFileExcelFill } from "react-icons/bs";

 


function Sidebar() {
    const [menuMobile, setMenuMobile] = useState(false)

  return (
  <>
    
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
          </NavLink>))}
      </div>
    </div>

    <div className='absolute md:hidden block top-3 right-3'>
        {menuMobile ? (
         <BsFillFileExcelFill 
         className='w-6 h-6 text-white mr-2 cursor-pointer'
         onClick={()=> setMenuMobile(false)}/>
          
        ): (
          <BsListNested 
          className='w-6 h-6 text-white mr-2 cursor-pointer'
          onClick={()=> setMenuMobile(true)}/>
        )}
    </div>

    <div className={`fixed top-0 h-screen w-2/4 backdrop-blur-lg bg-gradient-to-l from-white/5 to-[#241f46] p-3 z-10 md:hidden transition-all duration-500 ease-in ${menuMobile ? 'left-0 opacity-100' : '-left-full opacity-30'}`}>
      {enlaces.map((enlace=>
          <NavLink 
            key={enlace.nombre}
            to={enlace.to} 
            className={({ isActive}) =>
            isActive? 'text-cyan-500  flex justify-start items-center my-5 text-sm font-medium uppercase hover:font-bold' : ' flex justify-start items-center my-5 text-sm font-medium text-gray-500 hover:text-cyan-500 uppercase'}>
            <enlace.icon className='h-6 w-6 mr-2'/>    
            {enlace.nombre}
          </NavLink>))}
    </div>
  </>
  )
}

export default Sidebar
