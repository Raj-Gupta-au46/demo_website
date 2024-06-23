import React from 'react'
import laptop from "../assets/laptop.jpg"

const Experts = () => {
  return (
    <div className='max-w-[1240px] p-2 mx-auto my-10  md:grid grid-cols-2'>
      <div className=" col-span-1 md:w-[80%] text-center" >
        <img src={laptop} alt="" className='inline'/>
      </div>
    <div className=" col-span-1 flex flex-col justify-center">
        <h2 className='text-[#2ddea6] my-2 font-bold '>
            LEARN FROM EXPERTS
        </h2>
        <p className='my-2 text-justify '>

Learning with experts allows you to gain deep insights and knowledge from those who have mastered their fields. Their guidance can help you avoid common pitfalls and accelerate your understanding. Engaging with experts also provides access to their network and resources. This collaborative approach fosters a richer, more comprehensive learning experience.
        </p>
        <button  className=' w-[40%] bg-black text-white p-3 my-2  rounded '>Get Started</button>
    </div>

    </div>
  )
}

export default Experts
