import React, { useContext, useEffect, useState } from "react";
import item from "../assets/item.png";
import { motion } from "framer-motion";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CartContext from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import avatar from "../assets/avatar.png";
import axios from "axios";

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

export function Product(props) {
  const navigate = useNavigate();
  const { setCartContent, cartContent } = useContext(CartContext);
  const addProduct = (conf) => {
    if (cartContent.some((item) => item.id === conf.id)) {
      const updatedCart = cartContent.map((item) => {
        if (item.id === conf.id) {
          return {
            ...item,
            qte: item.qte + 1,
          };
        }
        return item;
      });
      setCartContent(updatedCart);
    } else {
      setCartContent([
        ...cartContent,
        {
          id: conf.id,
          name: conf.name,
          price: conf.price,
          qte: 1,
          url: "data:image/svg+xml;base64," + conf.url,
          category: conf.category,
          shop: conf.shop,
        },
      ]);
    }
  };
  return (
    <motion.div
      onClick={() => navigate(`/product/${props.id}`)}
      whileHover={{ scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className=" flex flex-col justify-center items-center px-4 py-4 hover:cursor-pointer card"
    >
      <img
        className=" h-[150px] w-[150px] object-contain "
        src={"data:image/svg+xml;base64," + props.url}
        alt="product image"
      />
      <h2>{props.name}</h2>
      <p className="price">{`${props.price}$`}</p>
      <p>{props.description}</p>

      <button
        onClick={(e) => {
          e.stopPropagation();
          addProduct(props);
        }}
        className=" w-full bg-[#42A4A4]"
      >
        Add to Cart
      </button>
    </motion.div>
  );
}

export function Seller(props) {
  const navigate = useNavigate();
  let [bool,setBool] = useState(props.subs.some((item) => item.shopId === props.shopId)) ;
  const urlUnsubscribe = `http://localhost:8010/v1/api/user/unSubscribe/${props.shopId}`;
  const urlSubscribe = `http://localhost:8010/v1/api/user/subscribe/${props.shopId}`;
  const subscribe = async (e) => {
    e.stopPropagation()
    try {
      let res = await axios.post(urlSubscribe, {}, { withCredentials: true });
      setBool(true)

    } catch (e) {}
  };
  const unsubscribe = async (e) => {
    e.stopPropagation()
    try {
      let res = await axios.post(urlUnsubscribe, {}, { withCredentials: true });
      setBool(false)
    } catch (e) {}
  };

  return (
    <motion.div
      onClick={() => navigate(`/shop/${props.shopId}`)}
      whileHover={{ scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="hover:cursor-pointer flex flex-col justify-center items-center "
    >
      <img
        className=" w-[200px] h-[200px] rounded-full "
        src={props.url ? "data:image/svg+xml;base64," + props.url : avatar}
        alt="seller image"
      />
      <h2 className=" text-[20px] font-semibold">{props.name}</h2>
      <button 
      onClick={(e)=>{bool ? unsubscribe(e)    : subscribe(e) }} 
      className="bg-[#42A4A4] hover:bg-opacity-60 mt-2 text-white flex justify-center items-center  h-10 w-[90%] ">
        {bool ? "Unsubscribe" : "Subscribe"}
      </button>
    </motion.div>
  );
}

function Featured({ products, sellers, subs }) {
  useEffect(()=>{
   console.log(subs)
  },[])
  const product = products.map((item) => (
    <Product
      id={item.productId}
      name={item.productName}
      url={item.productImageUrl}
      price={item.productPrice}
      category={item.categoryName}
      shop={item.shopId}
      description={item.productDesc}
    />
  ));
  const seller = sellers.map((item) => (
    <Seller subs={subs} name={item.name} url={item.image} {...item} />
  ));
  const navigate = useNavigate();

  return (
    <section className=" py-10 mt-8 flex flex-col gap-10 justify-center items-center">
      <div className="  w-full flex flex-col justify-center items-center ">
        <div className=" px-8 w-full flex flex-row justify-between items-center ">
          <h1 className=" text-center font-bold flex-grow text-[25px] text-black">
            Featured products
          </h1>
          <p
            onClick={() => {
              navigate("/products");
            }}
            className=" text-gray-500 hover:underline hover:cursor-pointer "
          >
            see more
          </p>
        </div>
        <div className=" bgSlider py-5 flex justify-center items-center  mt-5 w-full">
          <div className=" py-4 w-[75%]">
            <Carousel
              dotListClass="mydots"
              showDots={false}
              responsive={responsive}
            >
              {product}
            </Carousel>
          </div>
        </div>
      </div>
      <div className=" mt-5 w-full flex flex-col justify-center items-center ">
        <div className=" px-8 w-full flex flex-row justify-between items-center ">
          <h1 className=" text-center font-bold flex-grow text-[25px] text-black">
            Top sellers
          </h1>
          <p
            onClick={() => {
              navigate("/stores");
            }}
            className=" text-gray-500 hover:underline hover:cursor-pointer "
          >
            see more
          </p>
        </div>

        <div className=" py-5 bgSlider flex justify-center items-center  mt-5 w-full">
          <div className=" w-[75%]">
            <Carousel showDots={false} responsive={responsive}>
              {seller}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Featured;
