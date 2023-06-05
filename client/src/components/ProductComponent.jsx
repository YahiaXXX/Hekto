import React from 'react'
import {AiFillStar} from "react-icons/ai"
import {AiOutlineHeart} from "react-icons/ai"
import {FiFacebook} from "react-icons/fi"
import {FiInstagram} from "react-icons/fi"
import {FiTwitter} from "react-icons/fi"

function ProductComponent() {
  return (
    <div className=' mt-10  drop-shadow-xl bg-white flex flex-row gap-6 h-[450px] w-[70%] ' >
      <div className=' flex flex-row gap-4 py-4 justify-center items-center h-full w-[50%]' >
          <div className=' w-[40%] h-full justify-between flex gap-1 flex-col' >
            <img className=' h-[32%] ' src='https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80' alt="" />
            <img className='h-[32%]' src='https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80' alt="" />
            <img className='h-[32%]' src='https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80' alt="" />
           

          </div>
          <div className=' h-full w-[60%]' >
          <img className=' h-full' src='https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80' alt="" />
          </div>
      </div>
      <div className=' py-8 w-[50%]' >
        <h1 className=' text-[30px] text-[#0D134E] font-semibold ' >Play wood arm</h1>
        <div className=' w-full flex flex-row justify-start items-center gap-1' >
            <AiFillStar className=' text-yellow-400' />
            <AiFillStar className=' text-yellow-400' />
            <AiFillStar className=' text-yellow-400' />
            <AiFillStar className=' text-yellow-400' />
            <p>(22)</p>

        </div>
        <div className=' flex flex-row justify-start items-center gap-4' >
            <p className=' font-semibold text-[#151875] ' >32$</p>
            <p className=' font-semibold text-green-600 line-through ' >35$</p>
        </div>
        <div>
            <p className=' text-[#151875] font-semibold' >Color:</p>
        </div>
        <p className=' text-gray-500 w-full flex justify-start' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
        <div className=' mt-5 flex justify-center items-center gap-6' >
            <button className=' font-semibold text-[#151875]' >
                Add to cart
            </button>
            <p><AiOutlineHeart/></p>
        </div>
        <div>
            <p className=' mt-2 text-[#151875] font-semibold ' >Category:</p>
        </div>
        <div>
            <p className=' mt-2 text-[#151875] font-semibold ' >Tags:</p>
        </div>
        <div className=' mt-2 flex flex-row gap-1 justify-start items-center' >
            <p className='text-[#151875] mr-2 font-semibold ' >Share:</p>
            <p><FiFacebook/></p>
            <p><FiInstagram/></p>
            <p><FiTwitter/></p>

        </div>

        <div className=' mt-4 w-full' >
          <div className=' w-[50%] py-1 justify-around items-center drop-shadow-lg  flex flex-row bg-gray-100' >
            <p className=' text-blue-300 ' >Shop</p>
            <p className=' text-black' >Boutique name</p>

          </div>
            
        </div>


      </div>

    </div>
  )
}

export default ProductComponent