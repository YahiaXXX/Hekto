import React from 'react'
import {GiFountainPen} from "react-icons/gi"
import {BsFillCalendar2WeekFill} from "react-icons/bs"
import blog from "../assets/blog.png"
 
export const BlogItem=({image,author,date})=>(
    <div className='drop-shadow-lg ss:w-[30%] w-[90%] py-8 px-4 bg-white backdrop-blur-2xl rounded-md flex flex-col items-center justify-center mt-6 mb-6' >
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
        
        
    </div>
)


function LatestBlog() {
  return (
    <section className=' flex justify-center flex-col items-center' >
       <h1 className='font-bold text-[25px] text-black'  >Latest Blogs</h1>
        <div className=' w-[80%] gap-8 flex justify-center items-center flex-wrap' >
             <BlogItem image={blog} author="y.boukh" date="18 Dec,18:33" />
             <BlogItem image={blog} author="y.boukh" date="18 Dec,18:33" />
             <BlogItem image={blog} author="y.boukh" date="18 Dec,18:33" />
        </div>
    </section>
  )
}

export default LatestBlog