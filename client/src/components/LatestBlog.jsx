import React from 'react'
import {GiFountainPen} from "react-icons/gi"
import {BsFillCalendar2WeekFill} from "react-icons/bs"
import blog from "../assets/blog.png"
import { useNavigate } from 'react-router-dom'
import {motion} from "framer-motion"
 
export const BlogItem=({image,author,date})=>(
    <motion.div whileHover={{ scale: 1.1, y: -10 }}
    transition={{ type: 'spring', stiffness: 200, damping: 15 }} className=' hover:cursor-pointer drop-shadow-lg ss:w-[30%] w-[90%] py-8 px-4 bg-white backdrop-blur-2xl rounded-md flex flex-col items-center justify-center mt-6 mb-6' >
        <div className=' w-full justify-start items-start flex flex-col ' >
            
                <img src={image} alt="person" className=' w-full h-[150px]' />
                <div className='w-full flex gap-4 flex-row justify-start' >
                    <p className=' flex flex-row gap-2 justify-center items-center text-[#151875]' > <GiFountainPen/> {author}</p>
                    <p className='flex flex-row gap-2 justify-center items-center text-[#151875]'  > <BsFillCalendar2WeekFill/> {date}</p>

                </div>
                <h1 className=' mt-5 text-[#151875] font-semibold text-[20px]' >Top esssential Trends in 2021</h1>
                <p className=' text-gray-400 text-[16px] '  >More off this less hello samlande lied much
over tightly circa horse taped mightly</p>
         </div>
         <p className=' mt-3 w-full underline text-[#151875]' >Read more</p>
        
        
    </motion.div>
)


function LatestBlog() {
  const navigate=useNavigate()
  return (
    <section className=' flex justify-center flex-col items-center' >
       <div className=' px-8 w-full flex flex-row justify-between items-center ' >
          <h1 className=' text-center font-bold flex-grow text-[25px] text-black' >Latest blogs</h1>
          <p onClick={()=>{
              navigate("/categories")
          }} className=' text-gray-500 hover:underline hover:cursor-pointer ' >see more</p>
          </div>
        <div className=' mt-4 w-[80%] gap-8 flex justify-center items-center flex-wrap' >
             <BlogItem image={blog} author="y.boukh" date="18 Dec,18:33" />
             <BlogItem image={blog} author="y.boukh" date="18 Dec,18:33" />
             <BlogItem image={blog} author="y.boukh" date="18 Dec,18:33" />
        </div>
    </section>
  )
}

export default LatestBlog