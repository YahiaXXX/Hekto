import React,{useContext,useState,useEffect} from 'react'
import {useNavigate} from "react-router-dom" 
import AuthContext from "../contexts/AuthContext";
import axios from "axios";
import {motion} from "framer-motion"

import { IoIosNotifications } from "react-icons/io";
import avatar from "../assets/avatar.png"
import { useStateContext } from '../contexts/ContextProvider';

function NavbarAdmin() {
  const {baseUrl } = useContext(AuthContext);
  const urlGet = `${baseUrl}getcurrentShop`;
  const {pageName,setPageName}=useStateContext()
  const [imgUrl,setImgUrl]=useState("")
  const navigate= useNavigate()
  const getInfo = async () => {
    try {
      let res = await axios.get(urlGet, { withCredentials: true });
      if (res.data.image !== null) {
        setImgUrl(
          require(`C:/Users/apple pro/OneDrive/Desktop/e-commerce/ms-auth/images/${res?.data?.image}`)
        );
      }
      else{

      }
      console.log(res.data);
    } catch (e) {}
  };

  useEffect(()=>{
   getInfo()
  },[])
  return (
    <div className={`md:ml-72  px-8 py-2 flex flex-row justify-between`} >
        <h1 className=' text-[25px] font-bold text-gray-500' >{pageName}</h1>
      <div className='w-[60%] justify-end items-center flex flex-row gap-8' >
      
      <div className='justify-end items-center flex flex-row gap-8' >
      {/* <IoIosNotifications className=' text-[22px]' /> */}
        <motion.div whileHover={{scale:1.1}} transition={{duration:0.4}} onClick={()=>{setPageName("Setting");navigate("/settings")}} className=" bg-blue-950 hover:cursor-pointer flex justify-center items-center rounded-full w-[60px] h-[60px] ">
              <img src={ imgUrl!=="" ? imgUrl   : avatar} alt="avatar" className=" rounded-full w-[90%] h-[90%]" />
            </motion.div>

      </div>
       

      </div>
    </div>
  )
}

export default NavbarAdmin