import React, { useEffect, useState } from 'react'
import ProductComponent from '../components/ProductComponent'
import person from "../assets/person.png"
import {AiFillStar} from "react-icons/ai"
import brands from "../assets/brands.png"
import { useParams } from 'react-router-dom'
import  axios from "axios"

export const ProductItem=()=>(
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


function Product() {
  const msQueryAdmin = process.env.REACT_APP_QUERY_ADMIN_BASE_URL;
  const {id} = useParams()
  let urlGet=`http://localhost:8071/products/getProductById/${id}`
  const [productInfo,setProductInfo]=useState({})

  const getProductInfos= async ()=>{
    try{
      let res = await axios.get(urlGet,{withCredentials:true})
      console.log(res)
      setProductInfo(res.data)

    }
    catch(e){

    }
  }
  
  useEffect(()=>{
   getProductInfos()
  },[])
  return (
    <div className=' w-full min-h-screen flex flex-col justify-center items-center '  >
      <div className=' bg-[#BDE9C8] flex justify-center items-center top-0 w-full h-[20vh]' >
    <div className='w-[50%] flex flex-col justify-center items-start ' >
          <h1 className="  font-roboto ss:leading-[70px] leading-[50px] text-[40px] text-[#101750] font-bold" >Product</h1>
        </div>
        
      </div>
        <ProductComponent productInfo={productInfo} />
        {/* <div className=' mt-20 py-20 md:px-32 px-16 w-full bg-[#F9F8FE]' >
          <div className=' flex flex-row gap-6' >
            <p className='text-[#151875] text-[20px] font-semibold hover:underline'  >Description</p>
            <p className='text-[#151875] text-[20px] font-semibold hover:underline' >Additionnal Infos</p>
            <p className='text-[#151875] text-[20px] font-semibold hover:underline' >Reviews</p>
            <p className='text-[#151875] text-[20px] font-semibold hover:underline' >Videos</p>

          </div>
          <div className=' flex flex-col gap-3 mt-5' >
            <h1 className=' text-[18px] text-[#151875] font-semibold' >varius infos</h1>
            <p className=' text-[#A9ACC6]' >Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
            <h1 className=' text-[18px] text-[#151875] font-semibold' >More details</h1>
            <ul>
              <li className=' text-[#A9ACC6]' >Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
              <li className=' text-[#A9ACC6]' >Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
              <li className=' text-[#A9ACC6]' >Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
              <li className=' text-[#A9ACC6]' >Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>

            </ul>
            
          </div>

        </div> */}

        <div className='mt-20 flex flex-col w-full' >
          <div className=' px-16 w-full flex flex-row justify-start items-center '  >
            <h1 className=' text-[#151875] font-bold text-[32px]' >Related Products:</h1>
          </div>
          <div className=' mt-10 h-full py-10 flex-wrap flex flex-row gap-4 justify-center items-center' >
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>

          </div>
          

        </div>

    </div>
  )
}

export default Product