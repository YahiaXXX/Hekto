import React, { useContext } from 'react'
import item from "../assets/item.png"
import {motion} from "framer-motion"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CartContext from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

export const responsive = {
  superLargeDesktop: {
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
export const productData = [
    {
      id: 11312,
      imageurl:
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Colorful sneakers",
      price: 19.99,
      description: "Some text about the product..",
    },
    {
      id: 2123123,
      imageurl:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      name: "Sport sneakers",
      price: 21.99,
      description: "Some text about the product..",
    },
    {
      id: 3123123,
      imageurl:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "iWatch",
      price: 99.99,
      description: "Some text about the product..",
    },
    {
      id: 4134324,
      imageurl:
        "https://images.unsplash.com/photo-1610824352934-c10d87b700cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Water Bottle",
      price: 14.99,
      description: "Some text about the product..",
    },
    {
      id: 523423,
      imageurl:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Vans sneakers",
      price: 38.99,
      description: "Some text about the product..",
    },
    {
      id: 623423,
      imageurl:
        "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Coco Noir",
      price: 149.99,
      description: "Some text about the product..",
    },
    {
      id: 723423,
      imageurl:
        "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Sunglasses",
      price: 38.99,
      description: "Some text about the product..",
    },
    {
      id: 82342,
      imageurl:
        "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Dove cream",
      price: 49.99,
      description: "Some text about the product..",
    },
  ];

export function Product(props) {
      const navigate=useNavigate()
      const {setCartContent,cartContent} = useContext(CartContext)
      const addProduct=(conf)=>{
         if(cartContent.some(item => item.id === conf.id)){
          cartContent.map((item,index)=>{
            if(item.id===conf.id) item.qte+=1
          })
         }
         else{
           setCartContent([...cartContent,{
            id:conf.id,
            name:conf.name,
            price:conf.price,
            qte:1,
            url:conf.url,
            
        }])
         }
      }
    return (
      <motion.div onClick={()=>navigate("/product")} whileHover={{scale:0.9}} transition={{ duration: 0.5 }} className=" hover:cursor-pointer card">
        <img className="product--image" src={props.url} alt="product image" />
        <h2>{props.name}</h2>
        <p className="price">{`${props.price}$`}</p>
        <p>{props.description}</p>
        <p>
          <button 
          onClick={(e)=>{ e.stopPropagation() ; addProduct(props)}}
          className=' bg-[#42A4A4]' >Add to Cart</button>
        </p>
      </motion.div>
    );
  }

  export function Seller(props) {
    const navigate=useNavigate()
    return (
      <motion.div onClick={()=>navigate("/seller")} whileHover={{scale:0.9}} transition={{duration:0.5}} className="hover:cursor-pointer flex flex-col justify-center items-center ">
        <img className=" w-[200px] h-[200px] rounded-full " src={props.url} alt="seller image" />
        <h2>{props.name}</h2>
      </motion.div>
    );
  } 


function Featured() {
    const product = productData.map((item) => (
        <Product
          id={item.id} 
          name={item.name}
          url={item.imageurl}
          price={item.price}
          description={item.description}
        />
      ));
      const seller = productData.map((item) => (
        <Seller
          name={item.name}
          url={item.imageurl}
        />
      ));
      const navigate=useNavigate()
  
  return (
    <section className=' py-10 mt-8 flex flex-col gap-10 justify-center items-center' >
        <div className='  w-full flex flex-col justify-center items-center ' >
        <div className=' px-8 w-full flex flex-row justify-between items-center ' >
          <h1 className=' text-center font-bold flex-grow text-[25px] text-black' >Featured products</h1>
          <p onClick={()=>{
              navigate("/product")
          }} className=' text-gray-500 hover:underline hover:cursor-pointer ' >see more</p>
          </div>
             <div className=' py-5 bgSlider flex justify-center items-center  mt-5 w-full' >
                <div className='py-4 w-[75%]' >
                <Carousel dotListClass='mydots' showDots={false} responsive={responsive}>
        {product}
      </Carousel>

                </div>
             

             </div>
             

        </div>
        <div className=' mt-5 w-full flex flex-col justify-center items-center ' >
          <div className=' px-8 w-full flex flex-row justify-between items-center ' >
          <h1 className=' text-center font-bold flex-grow text-[25px] text-black' >Top sellers</h1>
          <p onClick={()=>{
              navigate("/stores")
          }} className=' text-gray-500 hover:underline hover:cursor-pointer ' >see more</p>
          </div>
            
             <div className=' py-5 bgSlider flex justify-center items-center  mt-5 w-full' >
                <div className=' w-[70%]' >
                <Carousel showDots={false} responsive={responsive}>
        {seller}
      </Carousel>

                </div>
             

             </div>
             

        </div>
    </section>
  )
}

export default Featured