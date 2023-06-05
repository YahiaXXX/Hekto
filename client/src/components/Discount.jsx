import React from 'react'
import hero from "../assets/discount.svg"
import {AiOutlineCheck} from "react-icons/ai"

function Discount() {
  return (
    <section className='flex flex-row justify-center items-center px-48' >
    <div className='flex-1 flex flex-col' >
        <h1 className=' text-[32px] font-bold text-[#151875] ' >20% Discount Of All Products</h1>
        <p className=' mt-8 text-[#42A4A4]' >Eams Sofa Compact</p>
        <p className=' text-gray-400 mt-4 text-[12px] ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
        <div className=' mt-4 w-full flex gap-4 flex-row flex-wrap justify-start items-center ' >
            <p className=' w-[40%] justify-start items-center flex flex-row' > <AiOutlineCheck/> Materiel expose like metal</p>
            <p className=' w-[40%] justify-start items-center flex flex-row ' > <AiOutlineCheck/> Materiel expose like metal</p>
            <p className=' w-[40%] justify-start items-center flex flex-row'> <AiOutlineCheck/> Materiel expose like metal</p>
            <p className= ' w-[40%] justify-start items-center flex flex-row'> <AiOutlineCheck/> Materiel expose like metal</p>
           
        </div>

        


   <button className=' mt-6 h-10 w-40 bg-[#42A4A4] text-white py-2 px-4' >
    Shop now

   </button>

    </div>
    <div className=' py-4 flex-1' >
        <img src={hero} alt="" />
    </div>

</section>

  )
}

export default Discount