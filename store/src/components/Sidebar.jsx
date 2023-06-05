import React, { useContext,useState,useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { linksFree,linksPremium } from "../utils/Links";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdLightMode } from "react-icons/md";
import {BsMoon} from "react-icons/bs"
import {FaStore} from "react-icons/fa"
import {HiOutlineLogout} from "react-icons/hi"
import AuthContext from "../contexts/AuthContext";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const {logoutUser} = useContext(AuthContext)
  const {activeMenu,screenSize,setActiveMenu} = useStateContext()
  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) setActiveMenu(false);
  };


  const activeLink =
  `flex w-full items-center gap-3 pl-4 pt-3 pb-2.5 rounded-[4px] text-[25px] font-[500] m-2`;
const normalLink =
  " hover:bg-slate-50 w-full hover:bg-opacity-20 flex items-center gap-3 pl-4 pt-3 pb-2.5 rounded-[4px] text-[25px] font-[500] text-gray-700 m-2";
  
  return (
    <div className={` h-screen overflow-auto`}>
      {activeMenu && (
        <>
          <div className=" h-[10%] flex justify-center items-center">
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
                   <p className={`text-black text-[25px] flex justify-center items-center gap-2 `} >
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
          
        
        </>
      )}
    </div>
  );
};

export default Sidebar;
