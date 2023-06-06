import React,{useRef,useEffect} from 'react'
import {GiCancel} from "react-icons/gi"

function PopupOrder({setShowPopup,orderInfo}) {
    const popupRef = useRef(null);
      useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closePopup();
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closePopup = () => {
    setShowPopup(false)
  };
  return (
    <div ref={popupRef} className=' animate-slideup flex bg-white flex-col justify-between py-4 w-[60%] gap-6' >
        <div className=' px-8 w-full flex justify-end items-center'  >

        <GiCancel onClick={()=>closePopup()} className=' text-[30px] hover:cursor-pointer hover:drop-shadow-xl' />
        </div>
        <div className=' w-full flex justify-center items-center flex-col gap-2 ' >
            <h1 className=' font-bold text-[25px]' >{`Order: ${orderInfo.orderId}`}</h1>
            <div className='flex flex-col justify-start items-start' >
            <p >Customer: <span>{orderInfo.userId}</span> </p>
            <p>Totale price: <span>{orderInfo.totalPrice}</span> </p>
            <p>Adress: <span></span> </p>
            </div>
           


        </div>
        <div className=' w-full flex justify-center items-center flex-col gap-2 ' >
            <h1 className=' font-bold text-[32px]'>Recipient Bank</h1>
            <div className='flex flex-col justify-start items-start' >
            <p>Bank: <span>Yahia</span> </p>
            <p>Recipient name: <span>Yahia</span> </p>
            <p>Account number: <span>Yahia</span> </p>
            <p>Fee: <span>Yahia</span> </p>
            <p>Adress: <span>Yahia</span> </p>

            </div>
            


        </div>
        <div className=' mt-4 w-full gap-10 flex flex-row justify-center items-center' >
            <button className=' rounded-[4px] bg-green-400 py-2 px-8' >Deliver</button>
            <button className=' rounded-[4px] bg-green-400 py-2 px-8' >Cancel</button>
        </div>

    </div>
  )
}

export default PopupOrder