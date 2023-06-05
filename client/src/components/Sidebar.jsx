import React, { useContext,useState,useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import { linksFree,linksPremium } from "../utils/Links";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdLightMode } from "react-icons/md";
import {BsMoon} from "react-icons/bs"
import axios from "axios";

const Sidebar = () => {


  const activeLink =
  `flex items-center gap-3 pl-4 pt-3 pb-2.5 rounded-[4px] text-[20px] font-[500] m-2`;
const normalLink =
  " hover:bg-slate-50 hover:bg-opacity-20 flex items-center gap-3 pl-4 pt-3 pb-2.5 rounded-[4px] text-[20px] font-[500] text-gray-700 m-2";
  
  return (
    <div className={` h-screen overflow-auto md:hover:overflow-auto pb-10`}>
      {true && (
        <>
          <div className=" h-[11%] flex justify-center items-end">
            <Link
              to="/"
              onClick={()=>{}}
              className=" justify-center items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight text-slate-900"
            >
              {/* <img src={ currentMode==="dark" ? logo : logoBlack } alt="logo" className=" h-[80%] w-[80%]" /> */}
            </Link>
          </div>
          <div className=" mx-4 h-[0.25px] dark:bg-black bg-[#FFFBFF] bg-opacity-20 mt-4 "></div>

          <div className=" mt-10">
            {true  ?  linksPremium.map((link) => (
              <div className="" key={link.title}>
                
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
                   <p className={` dark:text-black flex justify-center items-center gap-2 ${item.name==="Dark web" ? "text-[22px]"   : "text-[20px]" } `} >{item.icon} <span className="text-[14px]">{item.name}</span></p> 
                  </NavLink>
                ))}
                <div className=" mx-4 h-[0.25px] bg-[#FFFBFF] bg-opacity-20 "></div>
              </div>
            ))    :  linksFree.map((link) => (
              <div className="" key={link.title}>
                
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
                   <p className={` dark:text-black flex justify-center items-center gap-2 ${item.name==="Dark web" ? "text-[22px]"   : "text-[20px]" } `} >{item.icon} <span className="text-[14px]">{item.name}</span></p> 
                  </NavLink>
                ))}
                <div className=" mx-4 h-[0.25px] bg-[#FFFBFF] bg-opacity-20 "></div>
              </div>
            ))}
           
          </div>
          <NavLink to={`/profile`}  style={({ isActive }) => ({
                      backgroundColor: isActive ? "#EDE0DD" : "",
                      color: isActive ? "black" : "white",
                      transition: isActive
                        ? "background-color 0.5s ease-in-out"
                       : "background-color 0.5s ease-out",
                    })}  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  } >
          <div
            onClick={() =>{}}
            className="hover:cursor-pointer justify-start items-center gap-2 flex flex-row"
          >
            <div className="rounded-full w-[60px] h-[60px] ">
              {/* <img src={avatar} alt="avatar" className=" rounded-full w-full h-full" /> */}
            </div>
            <div className=" dark:text-black flex-2">
              <p className=" text-[14px]">yahia boukharouba</p>
              <p className=" text-[10px] ">y.boukharouba@esi-sba.dz</p>
            </div>
          </div>

          </NavLink>
         

          <div className=" mx-4 h-[0.25px] dark:bg-black bg-[#FFFBFF] bg-opacity-20 mt-4 "></div>

          <div className="  ">
            <p className=" flex text-[20px] flex-row text-white dark:text-black pl-4 pt-3 pb-2.5 gap-3 m-2 font-[500] items-center">
              <AiOutlineInfoCircle />{" "}
              <span className=" dark:text-black text-[14px]">Color Scheme</span>
            </p>

            <div className=" w-full flex justify-center items-center">
              <div
                className="flex flex-row bg-gray-700 h-[35px] w-[70%] rounded-2xl cursor-pointer"
              >
                
                  <div onClick={()=>{}}  className={`flex justify-center items-center gap-1 h-[25px] w-[50%] ml-[5px]   mt-[5px] mb-[5px]   rounded-2xl text-[14px] font-[500]`}>
                    <MdLightMode />
                    <span>Light</span>
                  </div>
               
                
                  <div onClick={()=>{}} className={`flex justify-center items-center gap-1 h-[25px] w-[50%] mr-[5px]  mt-[5px] mb-[5px] rounded-2xl text-[14px] font-[500]`}>
                    <BsMoon />
                    <span>Dark</span>
                  </div>
               
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
