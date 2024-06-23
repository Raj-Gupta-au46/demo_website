import React from 'react'

const Newletter = () => {
  return (
    <div className="bg-[#297ac1] p-4">
      <div className='max-w-[1240px] mx-auto md:flex  justify-between py-[50px]  '>
    <div className='m-2'>
        <h2 className=' text-[20px] md:text-[40px] font-bold text-white'>
            Want to learn latest I.T. skills ?
        </h2>
        <span className='text-[20px] text-white'>
            Signup to get updated
        </span>
    </div>
    <div className=' m-2 '>
        <input className='p-3 mr-2 text-gray-500 rounded mb-2' type="text"  placeholder='Email'/>
        <button  className='bg-black text-white p-3 mt-5 rounded  shadow-xl hover:scale-105  transition-shadow duration-500 '>Get Started</button>
        <br/>
        <p className='text-white'>
            We care about the protection of your data, Read our 
        </p>
        <br/>
        <a className='text-black' href=""> Privacy Policy</a>
    </div>
      </div>
    </div>
  )
}

export default Newletter
