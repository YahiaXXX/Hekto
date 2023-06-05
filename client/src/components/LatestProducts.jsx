import React from 'react'
import Slider from './Slider'

function LatestProducts() {
  return (
    <section className=' mt-10 py-10 flex flex-col justify-center items-center' >
        <h1 className=' text-[25px] text-black font-bold '  >Latest products</h1>
        <div className=' mt-4 flex flex-row gap-6 w-full justify-center items-center' >
            <p className=' hover:underline text-[16px]' >New arrivals</p>
            <p className=' hover:underline text-[16px]' >Best sellers</p>
            <p className=' hover:underline text-[16px]' >Special offers</p>

        </div>
        <div className=' w-full flex justify-center items-center px-20 ' >

        <Slider/>
        </div>
         
    </section>
  )
}

export default LatestProducts