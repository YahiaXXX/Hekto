import React, { useState,useEffect, useContext } from "react";
import { navLinks } from "../utils/index2";
import  menu from "../assets/menu.svg";
import AuthContext from "../contexts/AuthContext"
import  close from "../assets/close.svg";
import  logo  from "../assets/logo.svg";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import {AiOutlineUser} from "react-icons/ai"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {MdAddShoppingCart, MdFavorite, MdOutlineFavoriteBorder} from "react-icons/md"
import {BsSearch} from "react-icons/bs"
import {motion} from "framer-motion"
import {GrLogout} from "react-icons/gr"
import CartContext from "../contexts/CartContext";

const NavBarItem = ({item,lien, title, classprops,handleClick }) => (
  <li className={`mx-4 w-full cursor-pointer ${classprops}`}>
    <NavLink 
      key={title}
      to={lien}
      className="flex flex-row gap-4 justify-start items-center my-8 text-sm font-medium text-white hover:text-cyan-400"
      onClick={()=>handleClick && handleClick()}
      >   
        <item.icon className="w-6 h-6 object-contain mr-2" />
        {title}
      </NavLink>
  </li>
);


function Navbar({bool,setBool,bool2}) {

  const location=useLocation()
    const [toggle, setToggle] = useState(false);
    const [selected,setSelected] = useState(0)
    const navigate=useNavigate()
    const {logoutUser,authTokens}=useContext(AuthContext)
    const {setShowOrders} = useContext(CartContext)
    
    return (
      <nav className="fixed bg-[#BDE9C8] z-[20] top-0 w-full flex py-4 md:px-20 px-6 justify-between items-center">
        <div className="flex flex-row flex-1 items-center" >
        <div className="flex justify-center items-center flex-2" >
        <h1 className=" text-[30px] text-black font-bold" >Hekto</h1>
        </div>
        
        <ul className=" list-none md:flex hidden justify-center items-center flex-[0.6]">
          {navLinks.map((item, index) => (
            <li
            onClick={() => { setSelected(index) }}
            key={index}
            className={`font-inter font-normal cursor-pointer ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} text-[16px] text-[#2B2B39] ${index === selected ? "font-bold" : ""}`}
            style={{ position: "relative" }}
          >
            <NavLink to={`/${item.lien}`} smooth>{item.title}</NavLink>
          </li>
          ))}
        </ul>
        </div>
        
        <div className=" flex flex-row justify-center items-center gap-4" > 
          <motion.p onClick={()=>setShowOrders(true)}  whileHover={{scale:1.5}} transition={{duration:0.2}} className="  hover:cursor-pointer text-[20px]" > <AiOutlineUser/> </motion.p>
          <motion.p whileHover={{scale:1.5}} transition={{duration:0.2}} onClick={()=>{
            navigate("/favourites")
          }}  className=" hover:cursor-pointer text-[20px]"> <MdFavorite/> </motion.p>
          <motion.p whileHover={{scale:1.5}} transition={{duration:0.2}} onClick={()=>{
            navigate("/cart")
          }} className="hover:drop-shadow-lg hover:cursor-pointer text-[20px]"> <MdAddShoppingCart/> </motion.p>

          {authTokens &&  <motion.p whileHover={{scale:1.1}} transition={{duration:0.2}} onClick={()=>{
           logoutUser()
          }} className=" ml-3 hover:drop-shadow-lg flex flex-row gap-2 justify-center items-center hover:cursor-pointer text-[20px]"> Logout <GrLogout/> </motion.p>}


        </div>
        


        <div className="flex relative">
        {toggle ? (
          <AiOutlineClose
            fontSize={28}
            className="text-black md:hidden cursor-pointer "
            onClick={()=>setToggle(false)}
          />
        ) : (
          <HiMenuAlt4
          fontSize={28}
            className="text-black md:hidden cursor-pointer "
            onClick={()=>setToggle(true)}
          />
        )}
        { toggle && (
          <ul className=" z-[10] fixed top-0 -left-2 p-3 w-[50vw] h-screen shadow-2xl md:hidden list-none
           flex flex-col justify-start items-center rounded-md bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg text-white animate-slideright" >
            {navLinks.map((item, index) => (
          <NavBarItem  item={item} handleClick={()=>setToggle(false)} lien={item.lien} key={index} title={item.title} classprops="my-2 text-lg" />
        ))}
          </ul>
        )

        }
      </div>
      </nav>
    );
  }
  
  export default Navbar;