import React, { useContext, useEffect } from 'react'
import {AiFillStar} from "react-icons/ai"
import {AiFillHeart} from "react-icons/ai"
import {FiFacebook} from "react-icons/fi"
import {FiInstagram} from "react-icons/fi"
import {FiTwitter} from "react-icons/fi"
import CartContext from '../contexts/CartContext'
import {motion} from "framer-motion"

function PostComponent({postInfo}) {
  const {cartContent,setCartContent,setFavourites,favourites}=useContext(CartContext)
  
  return (
    <div className=' mt-10 bg-white  drop-shadow-xl flex flex-row gap-6 h-[450px] w-[70%] ' >
      <div className=' flex flex-row gap-4 py-4 justify-center items-center h-full w-[50%]' >
          
          <div className=' flex justify-center items-center h-[100%] w-[100%] ' >
          < motion.img whileHover={{scale:0.9}} transition={{duration:0.5}} className=' object-contain h-full' src={'data:image/svg+xml;base64,' + postInfo.postImageUrl} alt="" />
          </div>
      </div>
      <div className='py-8 flex items-start justify-center flex-col gap-4 w-[50%]' >
        <div className=' w-full flex justify-center items-center' >
        <h1 className=' text-[30px] text-[#0D134E] font-semibold ' >{`${postInfo.postTitle}`}</h1>

        </div>
        
       
        <div className=' flex flex-row justify-start items-center gap-4' >
            <p className=' font-semibold text-[#151875] ' > <span className=' text-gray-500' >Price:</span> {`${postInfo.postPrice}$`}</p>
            {/* <p className=' font-semibold text-green-600 line-through ' >35$</p> */}
        </div>
       
        <p className='text-[#151875] gap-2  w-full flex justify-start' > <span className='text-gray-500 ' >Description:</span> {postInfo.postDescription}</p>
        
        <div className=' mt-2 flex flex-row gap-4 justify-start items-center' >
            <p className='text-[#151875] mr-2 font-semibold ' >Share:</p>
            <p className=' hover:text-blue-400  hover:cursor-pointer text-[20px]' ><FiFacebook/></p>
            <p className=' hover:text-blue-400 hover:cursor-pointer text-[20px]' ><FiInstagram/></p>
            <p className='hover:text-blue-400 hover:cursor-pointer text-[20px]' ><FiTwitter/></p>

        </div>

        {/* <div className=' mt-4 w-full' >
          <div className=' w-[50%] py-1 justify-around items-center drop-shadow-lg  flex flex-row bg-gray-100' >
            <p className=' text-blue-300 ' >Shop</p>
            <p className=' text-black' >Boutique name</p>

          </div>
            
        </div> */}


      </div>

    </div>
  )
}

export default PostComponent