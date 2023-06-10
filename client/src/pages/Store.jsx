import React, { useEffect, useState,useContext } from 'react'
import ProductComponent from '../components/ProductComponent'
import person from "../assets/person.png"
import brands from "../assets/brands.png"
import { useParams } from 'react-router-dom'
import  axios from "axios"
import {AiFillStar} from "react-icons/ai"
import {AiFillHeart} from "react-icons/ai"
import {FiFacebook} from "react-icons/fi"
import {FiInstagram} from "react-icons/fi"
import {FiTwitter} from "react-icons/fi"
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




export function Product(props) {
  const navigate=useNavigate()
  const {setCartContent,cartContent} = useContext(CartContext)
  const addProduct=(conf)=>{
    if(cartContent.some(item => item.id === conf.id)){
      const updatedCart = cartContent.map((item) => {
        if (item.id === conf.id) {
          return {
            ...item,
            qte: item.qte + 1
          };
        }
        return item;
      })
      setCartContent(updatedCart);
    }
     else{
       setCartContent([...cartContent,{
        id:conf.id,
        name:conf.name,
        price:conf.price,
        qte:1,
        url:'data:image/svg+xml;base64,' + conf.url,
        category:conf.category,
        shop:conf.shop

        
    }])
     }
  }
return (
  <motion.div onClick={()=>navigate(`/product/${props.id}`)} whileHover={{scale:0.9}} transition={{ duration: 0.5 }} className=" flex flex-col justify-center items-center px-4 py-4 hover:cursor-pointer card">
    <img className=" h-[150px] w-[150px] object-contain " src={'data:image/svg+xml;base64,' + props.url} alt="product image" />
    <h2>{props.name}</h2>
    <p className="price">{`${props.price}$`}</p>
    <p>{props.description}</p>
    
      <button 
      onClick={(e)=>{ e.stopPropagation() ; addProduct(props)}}
      className=' w-full bg-[#42A4A4]' >Add to Cart</button>
  </motion.div>
);
}

export const ShopItem=({item})=>(
  <div className=' flex flex-col h-full w-[250px] '  >
    <img src={person} alt="" /> 
    <div className=' w-full flex flex-row justify-between' >
      <p className='text-[#151875] font-semibold ' >Mens fashion veste</p>
      <div className=' flex flex-row' >
        <AiFillStar className=' text-yellow-400 ' />
        <AiFillStar className=' text-yellow-400 '  />
        <AiFillStar className=' text-yellow-400 ' />
        <AiFillStar className=' text-yellow-400 ' />
        <AiFillStar className=' text-yellow-400 ' />

      </div>
      

    </div>
    <div className=' flex flex-row justify-start items-center w-full' >
        <p className='text-[#151875] font-semibold ' >170$</p>
      </div>
  </div>
)


function Store() {
  const msQueryAdmin = process.env.REACT_APP_QUERY_ADMIN_BASE_URL;
  const {id} = useParams()
  let urlGet=`http://localhost:8010/v1/api/shop/getShopByID?id=${id}`
  let urlGetProducts=`http://localhost:8071/products/getAllProductsByShopId?id=${id}`
  const urlGetSubs="http://localhost:8010/v1/api/user/getMySubscription"
  const [shopInfo,setShopInfo]=useState({})
  const [products,setProducts]=useState([])
  // const [subs,setSubs]=useState([])
  const [bool,setBool]=useState(false)
  const urlUnsubscribe = `http://localhost:8010/v1/api/user/unSubscribe/${id}`;
  const urlSubscribe = `http://localhost:8010/v1/api/user/subscribe/${id}`;

  const subscribe = async () => {
    try {
      let res = await axios.post(urlSubscribe, {}, { withCredentials: true });
      setBool(true)

    } catch (e) {}
  };
  const unsubscribe = async () => {
    try {
      let res = await axios.post(urlUnsubscribe, {}, { withCredentials: true });
      setBool(false)
    } catch (e) {}
  };

  const getSubs = async ()=>{
    try{
      let res = await axios.get(urlGetSubs,{withCredentials:true})
      // setSubs(res.data)
      setBool(res.data.some((item) => item.shopId === id))

    }
    catch(e){

    }
}

  const getProducts= async ()=>{
    try{
      let res = await axios.get(urlGetProducts,{withCredentials:true})
      console.log(res)

    }
    catch(e){


    }

  }

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

  const getShopInfos= async ()=>{
    try{
      let res = await axios.get(urlGet,{withCredentials:true})
      console.log(res)
      setShopInfo(res.data)

    }
    catch(e){

    }
  }
  
  useEffect(()=>{
   getShopInfos()
   getProducts()
   getSubs()
  },[])
  return (
    <div className=' w-full min-h-screen flex flex-col justify-center items-center '  >
      <div className=' bg-[#BDE9C8] flex justify-center items-center top-0 w-full h-[20vh]' >
    <div className='w-[50%] flex flex-col justify-center items-start ' >
          <h1 className="  font-roboto ss:leading-[70px] leading-[50px] text-[40px] text-[#101750] font-bold" >Store</h1>
        </div>
        
      </div>
      <div className=' mt-10 bg-white  drop-shadow-xl flex flex-row gap-6 h-[450px] w-[70%] ' >
      <div className=' flex flex-row gap-4 py-4 justify-center items-center h-full w-[50%]' >
          
          <div className=' flex justify-center items-center h-[100%] w-[100%] ' >
          < motion.img whileHover={{scale:0.9}} transition={{duration:0.5}} className=' object-contain h-full' src={'data:image/svg+xml;base64,' + shopInfo?.productImageUrl} alt="" />
          </div>
      </div>
      <div className='py-8 flex items-start justify-center flex-col gap-4 w-[50%]' >
        <div className=' w-full flex justify-center items-center' >
        <h1 className=' text-[30px] text-[#0D134E] font-semibold ' >{`${shopInfo?.name}`}</h1>

        </div>
        
       
        <div className=' flex flex-row justify-start items-center gap-4' >
            <p className=' font-semibold text-[#151875] ' > <span className=' text-gray-500' >Phone:</span> {`${shopInfo?.numberPhone}$`}</p>
            {/* <p className=' font-semibold text-green-600 line-through ' >35$</p> */}
        </div>
       
        <p className='text-[#151875] gap-2  w-full flex justify-start' > Adresse:</p>
         <p>{`Ville: ${shopInfo?.address?.ville}`}</p>
         <p>{`Willaya: ${shopInfo?.address?.wilaya}`}</p>
         <p>{`Street: ${shopInfo?.address?.street}`}</p>
        <div>
        <p className=' font-semibold text-[#151875] ' > <span className=' text-gray-500' >Email:</span> {`${shopInfo?.email}`}</p>
        </div>
        <div className=' mt-2 flex flex-row gap-4 justify-start items-center' >
            <p className='text-[#151875] mr-2 font-semibold ' >Accounts:</p>
            <p className=' hover:text-blue-400  hover:cursor-pointer text-[20px]' ><FiFacebook/></p>
            <p className=' hover:text-blue-400 hover:cursor-pointer text-[20px]' ><FiInstagram/></p>
            <p className='hover:text-blue-400 hover:cursor-pointer text-[20px]' ><FiTwitter/></p>

        </div>
        <div className=' mt-2 flex justify-center items-center w-full ' >
          <button onClick={()=>{
            bool ? unsubscribe()   : subscribe() 
          }}  className=' text-white h-10 bg-[#42A4A4] hover:bg-opacity-60 w-[50%] ' >
            {bool ? "Unsubscribe" : "Subscribe" }
          </button>

        </div>


      </div>

    </div>
    <div className=' bg-red-500 mt-20 flex flex-col w-full' >
          <div className=' px-16 w-full flex flex-row justify-start items-center '  >
            <h1 className=' text-[#151875] font-bold text-[32px]' >Products:</h1>
          </div>
          <div className=' bgSlider py-5 flex justify-center items-center  mt-5 w-full' >
                <div className=' py-4 w-[75%]' >
                <Carousel dotListClass='mydots' showDots={false} responsive={responsive}>
        {product}
      </Carousel>

                </div>
             

             </div>
          

        </div>

       
        <div className=' bg-red-500 mt-20 flex flex-col w-full' >
          <div className=' px-16 w-full flex flex-row justify-start items-center '  >
            <h1 className=' text-[#151875] font-bold text-[32px]' >Other sellers:</h1>
          </div>
          <div className=' mt-10 h-full py-10 flex-wrap flex flex-row gap-4 justify-center items-center' >
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>

          </div>
          

        </div>

    </div>
  )
}

export default Store