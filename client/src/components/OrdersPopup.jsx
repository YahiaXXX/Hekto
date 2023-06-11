import React, { useContext,useEffect, useState } from 'react'
import {GiCancel} from "react-icons/gi"
import CartContext from '../contexts/CartContext'
import axios from "axios"
import { timeFormat } from 'd3-time-format';


export const OrderItem=({item})=>{
  let color=""
  if(item.orderStatus==="PENDING"){color="#C00000"}
  if(item.orderStatus==="ON_HOLD"){color="#fcb814"}
  if(item.orderStatus==="DELIVERED"){color="#63954a"}
  const formDate=(d)=>{
    const date = new Date(d) 
    const formatSpecifier = "%Y-%m-%d";
    const formatDate = timeFormat(formatSpecifier);
    let res = formatDate(date)
    return res

   }


  
  
  return (
  <div className=' w-full py-6 px-2 bg-[#BDE9C8]' >
              <h1 className='flex flex-row justify-center items-center gap-3' >  <span className='font-bold text-[20px]' >Order:</span> {item.orderId}  </h1>
              <div className=' mt-4 flex flex-row justify-around items-start' >
                <div className=' flex flex-col gap-2 justify-center items-start ' >
                  <p className=' flex flex-row items-center justify-center gap-2' > <span className=' font-semibold' >Date: </span> {formDate(item.ordeDate)}</p>
                  <p className=' flex flex-row justify-center items-center gap-2 ' > <span className=' font-semibold' >Total price: </span> {`${item.totalPrice}$`} </p>
                  <div style={{background:color}} className=' mt-2 rounded-md text-white font-semibold px-4 py-1' >
                  {item.orderStatus}
                    

                  </div>

                </div>
                <div className='flex flex-row justify-center items-start gap-4' >
                  <p className=' font-semibold' >Full address:</p>
                  <div className=' flex flex-col' >
                  <p>{item.address.wilaya}</p>
                  <p>{item.address.ville}</p>
                  <p>{item.address.street}</p>
                  </div>

                </div>

               
                
              </div>
              

            </div>
)}


function OrdersPopup() {
    const {setShowOrders} = useContext(CartContext)
    const urlOrders = "http://localhost:8081/orders/getAllUserOrders"
    const [orderInfo,setOrderInfo]=useState([])

    const getOrders = async  ()=>{
      try{
        let res = await axios.get(urlOrders,{withCredentials:true})
        console.log(res)
        setOrderInfo(res.data)
      }
      catch(e){

      }
    }


    useEffect(()=>{
     getOrders()
    },[])
  return (
    <div className='  right-0 animate-slideright px-4 h-screen w-[30vw] bg-slate-100 z-[10] absolute py-4 ' >
        <div className=' w-full flex justify-between items-center px-4 ' >
           <button onClick={()=>{setShowOrders(false)}} 
        className=' cursor-pointer text-[25px] text-black hover:bg-light-gray hover:bg-opacity-25  rounded-full p-2 '  > <GiCancel/> </button>
        <h1 className='font-bold text-[30px]' >ORDERS</h1>
         </div>
        <div className=' mt-3 h-full w-full flex flex-col justify-center items-center' >
        <div className='orderBar h-full overflow-scroll flex flex-col gap-3 justify-start items-start pb-8   w-full'  >
            {orderInfo.map((item,index)=>(
              <OrderItem item={item} key={index} />
            ))}
        </div>
        </div>
        

    </div>
  )
}

export default OrdersPopup