import React from 'react'

import { IoIosNotifications } from "react-icons/io";
import avatar from "../assets/avatar.png"
import { useStateContext } from '../contexts/ContextProvider';

function NavbarAdmin() {
  const {pageName}=useStateContext()
  return (
    <div className={`md:ml-72  px-8 py-2 flex flex-row justify-between`} >
        <h1 className=' text-[25px] font-bold text-gray-500' >{pageName}</h1>
      <div className='w-[60%] justify-end items-center flex flex-row gap-8' >
      
      <div className='justify-end items-center flex flex-row gap-8' >
      <IoIosNotifications className=' text-[22px]' />
        <div className=" bg-blue-950 flex justify-center items-center rounded-full w-[60px] h-[60px] ">
              <img src={avatar} alt="avatar" className=" rounded-full w-[90%] h-[90%]" />
            </div>

      </div>
       

      </div>
    </div>
  )
}

export default NavbarAdmin