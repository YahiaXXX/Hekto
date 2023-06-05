import React from 'react'
import searchsvg from "../assets/search.svg"
import { IoIosNotifications } from "react-icons/io";
import avatar from "../assets/avatar.png"

function NavbarAdmin() {
  return (
    <div className={`${true ? " md:ml-72 " : "flex-2"} flex flex-row justify-around`} >
        <h1 className=' text-[22px] text-gray-500' >Dashboard</h1>
        <div className="px-4 flex  justify-start items-center relative">
      <input className=' w-[60%] px-10 drop-shadow-md py-2 rounded-2xl border-color border-[0.25px] outline-none' type="search" placeholder='Search...'  />
      <img src={searchsvg} className="absolute ml-2 w-6 h-6" alt="search" />
      </div>

      <div className=' flex flex-row gap-8' >
        <IoIosNotifications/>
        <div className="rounded-full w-[60px] h-[60px] ">
              <img src={avatar} alt="avatar" className=" rounded-full w-full h-full" />
            </div>

      </div>
    </div>
  )
}

export default NavbarAdmin