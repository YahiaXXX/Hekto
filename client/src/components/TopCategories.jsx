import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {motion} from "framer-motion"
import { useNavigate } from 'react-router-dom';


export const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  

export function Category(props) {
  let url = ""
  if(props.name==="Electronics"){}
  if(props.name==="Fashion and Apparel"){}
  if(props.name==="Home and Kitchen"){}
  if(props.name==="Beauty and Personal Care"){}
  if(props.name==="Health and Fitness"){}
  if(props.name==="Toys and Games"){}
  if(props.name==="Books and Media"){}
  if(props.name==="Sports and Outdoors"){}
    return (
      <motion.div whileHover={{scale:0.9}} transition={{duration:0.5}}  className=" flex flex-col justify-center items-center ">
        <img className=" w-[200px] h-[200px] rounded-full " src={url} alt="seller image" />
        <h2>{props.name}</h2>
      </motion.div>
    );
  } 
function TopCategories({categories}) {
  const  navigate=useNavigate()
    const category = categories.map((item) => (
        <Category
          name={item.categoryName}
        />
      ));
  return (
    <section className=' my-10  py-10 ' >
        <div className=' w-full flex flex-col justify-center items-center ' >
        <div className=' px-8 w-full flex flex-row justify-between items-center ' >
          <h1 className=' text-center font-bold flex-grow text-[25px] text-black' >Top Categories</h1>
          <p onClick={()=>{
              navigate("/categories")
          }} className=' text-gray-500 hover:underline hover:cursor-pointer ' >see more</p>
          </div>
             <div className='flex justify-center items-center  mt-5 w-full' >
                <div className=' w-[70%]' >
                <Carousel showDots={false} responsive={responsive}>
        {category}
      </Carousel>

                </div>
             

             </div>
             

        </div>
        
    </section>
  )
}

export default TopCategories