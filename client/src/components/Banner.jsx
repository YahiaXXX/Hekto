import React from 'react'
import banner from "../assets/banner.png"
import pub from "../assets/pub.svg"

function Banner() {
  return (
    <section className=' w-full py-10 my-10 ' >
        <div className=' relative'>
  <img src={banner} alt="" className='w-full h-auto' />
  <div className='absolute inset-0 flex flex-col justify-center items-center'>
    <h1 className='text-3xl text-[#151875] text-center'>Get Latest Updates By Subscribing to Our Newsletter</h1>
    <button className='mt-6 py-3 px-4 text-white bg-[#42A4A4] '>Shop now</button>
  </div>
</div>

<div className=' flex justify-center items-center mt-10' >
    <img src={pub} alt="" />

</div>
    </section>
  )
}

export default Banner