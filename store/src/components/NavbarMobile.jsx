import React,{useEffect,useState,useContext} from 'react'
import { NavLink } from 'react-router-dom'
import {HiMenuAlt4} from "react-icons/hi"
import {AiOutlineClose} from "react-icons/ai"
import { linksPremium,linksFree } from "../utils/Links";
import { useStateContext } from '../contexts/ContextProvider';
import { Link,useNavigate } from "react-router-dom";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdLightMode } from "react-icons/md";
import {BsMoon} from "react-icons/bs"
import axios from 'axios';
import AuthContext from '../contexts/AuthContext';
import avatar from "../assets/avatar.png";
import {BiTime} from "react-icons/bi"
import {FaStore} from "react-icons/fa"
import {HiOutlineLogout} from "react-icons/hi"

export const ListItem=({icon,name,link,setToggle})=>{

    return(
    <li className={` w-full flex flex-row justify-center items-center gap-2 cursor-pointer my-2 text-white text-lg`}> 
          <NavLink onClick={()=>setToggle(false)} className=' hover:bg-[#EDE0DD] w-full flex flex-row gap-2 justify-start items-center' to={link} >
            {icon}  {name}</NavLink></li>
    )
  }

  const activeLink =
    `flex items-center gap-3 pl-4 pt-3 pb-2.5 rounded-[4px] text-[20px] font-[500] m-2`;
  const normalLink =
    " hover:bg-slate-50 hover:bg-opacity-20 flex items-center gap-3 pl-4 pt-3 pb-2.5 rounded-[4px] text-[20px] font-[500] text-gray-700 m-2";

function NavbarMobile() {
  const {baseUrl,authTokens,logoutUser}=useContext(AuthContext)
  const urlGetInfo=`${baseUrl}account/profile/`
  const [profilInfo,setProfileInfo]=useState({
    phone:"",
    email:"",
    image:"",
    full_name:""
  })
    const [toggle,setToggle]=useState(false)
    
    const { activeMenu, setActiveMenu, screenSize, setPay,setMode,currentMode } = useStateContext();

  return (
    <div className=" z-[20] bg-transparent py-4 justify-end flex w-full absolute">

    {toggle ? (
      ""
    ) : (

      <HiMenuAlt4
      fontSize={28}
        className=" text-black md:hidden cursor-pointer "
        onClick={()=>setToggle(true)}
      />
    )}



    { toggle && 
    <div className=" overflow-scroll bg-white z-[1000] fixed top-0 -right-2 p-3 w-[40vw] h-screen shadow-2xl md:hidden list-none
    flex flex-col justify-center items-center rounded-md text-black animate-slideright" >
      <div className=" flex justify-start items-center text-xl w-full my-2" >
          <AiOutlineClose className=' text-black'  onClick={()=>setToggle(false)} />
        </div>
          <div className=" w-full py-5 flex justify-center items-center">
            <Link
              to="/"
              onClick={()=>{}}
              className=" justify-center items-center gap-4 ml-3 mt-4 flex text-xl font-extrabold tracking-tight text-slate-900"
            >
              <p className=" text-[30px]" ><FaStore className=" text-[30px]" /></p>
              <h1 className=" text-[30px] text-gray-400 font-semibold" >Boutique</h1>
              
            </Link>
          </div>

          <div className=" h-[80%] flex flex-col justify-center items-center">
            {linksPremium.map((link) => (
              <div className="flex flex-col gap-4 justify-around items-start h-full" key={link.title}>
                
                {link.links.map((item) => (
                  <NavLink
                    key={item.name}
                    to={`/${item.link}`}
                    onClick={()=>{}}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? "#EDE0DD" : "",
                      color: isActive ? "black" : "white",
                      transition: isActive
                        ? "background-color 0.5s ease-in-out"
                       : "background-color 0.5s ease-out",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                   <p className={`text-black text-[25px] flex justify-center items-center gap-4 `} >
                    {item.icon} <span className=" text-black text-[18px]">{item.name}</span></p> 
                  </NavLink>
                ))}
                <button onClick={()=>logoutUser()}  className=" hover:text-primary text-[20px] w-full flex justify-start px-6 gap-4 items-center " >
                
            Logout <HiOutlineLogout className=" text-[20px]" />
           
  
                </button>
              </div>
            ))   
                  }
          </div>
          
        
        </div>

    }
  </div>
  )
}

export default NavbarMobile