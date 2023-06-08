import React from 'react'
import Slider from './Slider'
import {BsArrowRight} from "react-icons/bs"

function LatestProducts() {
  return (
    <section className=' mt-10 py-10 flex flex-col justify-center items-center' >
        <h1 className=' text-[25px] text-black font-bold '  >Latest products</h1>
        <p className=' text-gray-400 flex flex-row gap-2 justify-center items-center hover:cursor-pointer hover:underline text-[20px] font-bold ' > <span>See all</span> <BsArrowRight/> </p>
            

      
        <div className=' w-full flex justify-center items-center px-20 ' >

        <Slider/>
        </div>
         
    </section>
  )
}

export default LatestProducts