import React from 'react'
import {GiCheckMark} from "react-icons/gi"
import check from "../assets/check.svg"
import clock from "../assets/clock.svg"
import checklist from "../assets/checklist.svg"
import pub from "../assets/pub.svg"

function OrderCompleted() {
  return (
    <div className='w-full flex flex-col justify-center items-center ' >
      <div className=' bg-[#BDE9C8] flex justify-center items-center top-0 w-full h-[300px]' >
    <div className='w-[50%] flex flex-col justify-center items-start ' >
          <h1 className="  font-roboto ss:leading-[70px] leading-[50px] text-[40px] text-[#101750] font-bold" >My account</h1>
        </div>
        
      </div>
      
      <div className=' my-10 relative border-dotted border-opacity-30 border-l-[3px] border-b-[3px] border-[#101750] w-[50%] py-10 px-10 flex flex-col justify-center items-center'  >
        {/* <img src={clock} alt="" className=' absolute top-0 left-0' /> */}
      <div className=' bg-gray-100 rounded-full py-4 px-4 ' >
           <img src={check} alt="" />
        </div>

         <div className='gap-6 flex flex-col justify-center items-center ' >
          <h1 className=' font-semibold text-[#101750] text-[30px] ' >Your order is completed!</h1>
          <p className=' text-gray-400 my-2 text-center '  >Thank you for your order! Your order is being processed and will be completed within 3-6
hours. You will receive an email confirmation when your order is completed.
</p>
        

       </div>

       <button className=' text-white font-semibold mt-4 bg-[#008000] h-10 px-6 rounded-md ' >
        Continue shopping

       </button>

      </div>
     

     <div className=' mt-10 flex justify-center items-center w-full' >
      <img src={pub} alt="" className=' object-cover' />

     </div>

      


 

    </div>
  )
}

export default OrderCompleted