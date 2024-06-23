import React from 'react'
import { ReactTyped } from "react-typed";

const Banner = () => {
  return (
    <div>
      <div className='bg-[#6fa8da] w-full py-[50px] '>
        <div className='max-w-[1240px] py-[100px] mx-auto text-center font-bold '>
    <div className='text-xl md:text-3xl md:p-[24px]'>
    Learn with us
    </div>

    <h2 className=' text-white text-4xl md:text-[80px] md:p-[24px]'>
            Grow with us.
        </h2>
        <div className=' text-[20px] md:text-[50px] md:p-[24px] text-white '>
            Learn 
            <ReactTyped className='pl-3' strings={[" Web Development"," Digital Marketing"," Ethical Hacking"]} typeSpeed={100} loop={true}  backSpeed={70} />
        </div>
        <button  className='bg-black text-white p-3 mt-5 rounded  shadow-xl hover:scale-105  transition-shadow duration-500'>Get Started</button>
        
        </div>
    </div>
    <div class="bg-gray-800 text-white py-16 px-8 font-sans">
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center gap-x-6 gap-y-8">
        <div class="md:w-1/2 text-center md:text-left">
          <h2 class="text-3xl font-semibold mb-4">Unlock Your Potential</h2>
          <p class="text-base text-gray-300">Upgrade your skills with our premium courses. Enroll now and access exclusive content!</p>
        </div>

        <div class="md:w-1/2 flex justify-center">
          <button type="button" class="bg-yellow-400 text-gray-800 py-3 px-6 font-semibold rounded">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Banner
