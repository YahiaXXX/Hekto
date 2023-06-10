import React, { useContext } from 'react'
import {GiCancel} from "react-icons/gi"
import CartContext from '../contexts/CartContext'

function OrdersPopup() {
    const {setShowOrders} = useContext(CartContext)
  return (
    <div className=' right-0 animate-slideright px-4 h-screen w-[30vw] bg-slate-100 z-[10] absolute py-4 ' >
        <div className=' h-[5%] w-full flex justify-start items-center px-2' > <button onClick={()=>{setShowOrders(false)}} 
        className=' cursor-pointer text-[25px] text-black hover:bg-light-gray hover:bg-opacity-25  rounded-full p-2 '  > <GiCancel/> </button> </div>
        <div className=' w-full flex justify-center items-center' >
        <h1 className=' font-bold text-[30px]' >ORDERS</h1>
        <div>
            <div>

            </div>
        </div>
        </div>
        

    </div>
  )
}

export default OrdersPopup