import React from 'react'
import searchsvg from "../assets/search.svg"
import { IoIosNotifications } from "react-icons/io";
import avatar from "../assets/avatar.png"

function NavbarAdmin() {
  return (
    <div className={`${true ? " md:ml-72 " : "flex-2"} px-32 py-2 flex flex-row justify-between`} >
        <h1 className=' text-[25px] font-bold text-gray-500' >Dashboard</h1>
      <div className='w-[60%] justify-end items-center flex flex-row gap-8' >
      <div className="px-4 flex w-[70%]  justify-start items-center relative">
      <input className=' w-[100%] px-10 drop-shadow-md py-2 rounded-2xl border-color border-[0.25px] outline-none' type="search" placeholder='Search...'  />
      <img src={searchsvg} className="absolute ml-2 w-6 h-6" alt="search" />
      </div>
      <div className='  w-[30%] justify-end items-center flex flex-row gap-8' >
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