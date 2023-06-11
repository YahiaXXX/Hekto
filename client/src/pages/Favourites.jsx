import React, { useContext, useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { BsFillGridFill } from "react-icons/bs";
import { BsListUl } from "react-icons/bs";
import searchsvg from "../assets/search.svg";
import item from "../assets/item.png";
import AuthContext from "../contexts/AuthContext";
import axios from "axios";
import { motion } from "framer-motion";
import CartContext from "../contexts/CartContext";
import ProductComponentFav from "../components/ProductComponentFav";

export const StoreItem = ({product}) => {
  return (
    <div className=" flex flex-col rounded-full justify-center items-center w-[250px] h-[250px] ">
      <img
        src={'data:image/svg+xml;base64,' + product.productImageUrl}
        alt=""
        className=" w-[200px] h-[200px] rounded-full object-cotain"
      />
      <h1 className="text-[#111C85] text-[20px] font-semibold">{product.productName}</h1>
      <p>{`${product.productPrice}$`}</p>
    </div>
  );
};

export const Rating = ({ number }) => (
  <div className=" flex flex-row justify-center items-center">
    {Array.from({ length: number }, (_, index) => (
      <AiFillStar className=" text-[20px] text-yellow-300" />
    ))}
    {Array.from({ length: 5 - number }, (_, index) => (
      <AiOutlineStar className="text-[20px]" />
    ))}
  </div>
);

function Favourites() {
    const {favourites,setFavourites}=useContext(CartContext)

  return (
    <div className=" w-full min-h-screen flex flex-col ">
      <div className=" bg-[#BDE9C8] flex justify-center items-center top-0 w-full h-[250px]">
        <div className="w-[50%] flex flex-col justify-center items-start ">
          <h1 className="  font-roboto ss:leading-[70px] leading-[50px] text-[40px] text-[#101750] font-bold">
            Favourites
          </h1>
        </div>
      </div>

      <div className="px-8 my-10 h-full flex-grow w-full justify-center items-center flex sm:flex-row flex-col sm:gap-0 gap-3 ">
        <div className=" sm:w-[80%] w-full ">
          
          <div className="justify-center items-center mt-5 flex flex-row flex-wrap gap-4 h-full w-full">
            {favourites.map((item,index)=>(
              // <StoreItem product={item} key={index} />
              <ProductComponentFav productInfo={item} />
              
            ))}
            {favourites.length===0 && 
               <h1 className=" text-[70px] text-gray-400" >Empty</h1>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favourites;
