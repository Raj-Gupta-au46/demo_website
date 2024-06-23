import React, { useState } from 'react'
import { IoClose, IoMenu } from "react-icons/io5";

const Headers = () => {
const [ toggle , setToggle] =  useState(false)

  return (

    <div className='dark:bg-gray-900 p-4'>
      <div className='max-w-[1240px] py-[12px] items-center flex justify-between  mx-auto'>
        <div className='text-2xl font-bold text-gray-200'>
          EverdriveStudios
        </div>
        {
          toggle  ? 
<IoMenu onClick={()=> setToggle(!toggle)} className='text-2xl text-white md:hidden block'/>
:
<IoClose onClick={() => setToggle(!toggle)} className='text-2xl text-white md:hidden block'/>

        }
      <ul className=' hidden md:flex text-white gap-10'>
      <li>
          Home
        </li>
        <li>
          Company
        </li>
        <li>
          Resources
        </li>
        <li>
          About 
        </li>
        <li>
          Contact
        </li>
      </ul>
      {/* Responsive menu */}
      <ul className={ ` duration-300 md:hidden  w-full h-screen text-white fixed bg-black  top-[88px]  ${ toggle ? 'left-[0]' : ' left-[-100%]' }` }>
      <li className='p-5'>
          Home
        </li>
        <li className='p-5'>
          Company
        </li>
        <li className='p-5'>
          Resources
        </li>
        <li className='p-5'>
          About 
        </li>
        <li className='p-5'>
          Contact
        </li>
      </ul>
      </div>
    </div>
  )
}

export default Headers
