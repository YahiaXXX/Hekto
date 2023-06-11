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
    <div ref={popupRef} className=' animate-slideup flex bg-white flex-col justify-center items-center pb-16 pt-4 w-[60%] gap-6' >
        <div className=' px-8 w-full flex justify-end items-center'  >

        <GiCancel onClick={()=>closePopup()} className=' text-[30px] hover:cursor-pointer hover:drop-shadow-xl' />
        </div>
        <div className=' w-full flex justify-center items-center flex-col gap-2 ' >
            <h1 className=' font-bold text-[25px]' >{`Order: ${orderInfo.orderId}`}</h1>
            <div className=' gap-2 w-[50%] flex flex-col justify-start items-start' >
            <p className=' font-bold' >Customer: <span className=' font-normal' >{orderInfo.userId}</span> </p>
            <p className=' font-bold' >Totale price: <span className=' font-normal' >{orderInfo.totalPrice}</span> </p>
            <div className=' flex flex-row ' >
            <p className=' font-bold ' >Adress: <span className=' font-normal' >{`${orderInfo.address.wilaya},${orderInfo.address.ville},${orderInfo.address.street}`}</span> </p>
            
            </div>
            
            </div>
           


        </div>
        <div className=' w-full flex justify-center items-center flex-col gap-2 ' >
        <h1 className=' font-bold text-[25px]' >{`Recipient id: ${orderInfo.orderId}`}</h1>
            <div className=' w-[50%] flex flex-col gap-2 justify-start items-start' >
            <p className=' font-bold' >Bank: <span className=' font-normal' >Yahia</span> </p>
            <p className=' font-bold'>Recipient name: <span className=' font-normal'>Yahia</span> </p>
            <p className=' font-bold'>Account number: <span className=' font-normal'>Yahia</span> </p>
            <p className=' font-bold'>Fee: <span className=' font-normal'>Yahia</span> </p>
            <p className=' font-bold'>Adress: <span className=' font-normal'>Yahia</span> </p>

            </div>
            


        </div>

    </div>
  )
}

export default PopupOrder