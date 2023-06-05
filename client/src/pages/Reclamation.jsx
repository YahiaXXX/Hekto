import React from 'react'
import reclamation from "../assets/reclamation.svg"
import brands from "../assets/brands.png"

function Reclamation() {
  return (
    <div className='w-full min-h-screen flex flex-col' >
        <div className=' bg-[#BDE9C8] flex justify-center items-center top-0 w-full h-[300px]' >
    <div className='w-[50%] flex flex-col justify-center items-start ' >
          <h1 className="  font-roboto ss:leading-[70px] leading-[50px] text-[40px] text-[#101750] font-bold" >Vintage post</h1>
        </div>
        
      </div>
      <div className=' w-full flex flex-row justify-center items-center py-5 px-32 ' >
       <div className=' w-[50%]' >
       <div className=' h-full bg-green-400 bg-opacity-50 py-5 px-5 flex flex-col gap-6 w-[80%]' >
            <div className=' w-full' >
                <h1 className=' text-[22px] font-bold text-[#101750] ' >Describe your problem</h1>

            </div>
            <div className=' mt-4 flex flex-row gap-2 justify-center items-center w-full' >
                <input className='border-opacity-30 border-[#000] outline-none w-[50%] px-4 py-2 border-[1px]' type="text" placeholder='your name..' />
                <input  className=' border-opacity-30 border-[#000] outline-none w-[50%] px-4 py-2 border-[1px] ' type="email" placeholder='your email..' />

            </div>
            <input className=' border-opacity-30 border-[#000] outline-none px-4 py-2 w-full border-[1px]' type="text" placeholder='Subject*' />
            <textarea 
            style={{resize:"none"}}
            className=' border-opacity-30 border-[#000] border-[1px] outline-none py-1 px-4'
            placeholder='your message' name="" id="" cols="30" rows="10"></textarea>

        </div>
       </div>
        <div className=' w-[40%]' >
            <img className=' w-full h-full object-contain' src={reclamation} alt="" />
        </div>

      </div>

      <div className=' mt-5 w-full flex justify-center items-center '  >
        <img src={brands} alt="" />
      </div>

      <div>

      </div>
    </div>
  )
}

export default Reclamation