import React,{useRef,useEffect} from 'react'
import {GiCancel} from "react-icons/gi"

function PopupComplaint({setShowPopup}) {
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
    <div ref={popupRef} className='flex bg-white flex-col justify-between py-4 w-[60%] gap-6' >
        <div className=' px-8 w-full flex justify-end items-center'  >

        <GiCancel onClick={()=>closePopup()} className=' text-[30px] hover:cursor-pointer hover:drop-shadow-xl' />
        </div>
        <div className=' flex flex-col gap-4 justify-center items-center w-full' >
            <div className=' flex flex-col justify-center items-start w-[50%]' >
                <label  className=' font-semibold' htmlFor="">Client name:</label>
                <input className=' w-full px-4 py-2 border-[#000] border-[1px]' type="text" />

            </div>
            <div className=' flex flex-col justify-center items-start w-[50%]' >
                <label  className=' font-semibold' htmlFor="">Subject:</label>
                <input className=' w-full px-4 py-2 border-[#000] border-[1px]' type="text" />

            </div>
            <div className=' flex flex-col justify-center items-start w-[50%]' >
                <label  className=' font-semibold' htmlFor="">Message:</label>
                <textarea className=' w-full px-4 py-2 border-[#000] border-[1px]' name="" id="" cols="30" rows="10"></textarea>

            </div>
        
        
        
            
            
        </div> 

        <div className=' mt-4 w-full gap-10 flex flex-row justify-center items-center' >
            <button className=' rounded-[4px] bg-green-400 py-2 px-8' >Reply</button>
            <button className=' rounded-[4px] bg-green-400 py-2 px-8' >Cancel</button>
        </div>

    </div>
  )
}

export default PopupComplaint