import React from 'react'
import {footerLinks} from "../utils/index2"
import {socialMedia} from "../utils/index2"
import { HashLink } from 'react-router-hash-link'



function Footer({bool,setBool,bool2,setBool2}) {
  return (
    <section className={` mt-10 bg-opacity-50  bg-[#BDE9C8] flex-col`}>
    <div className={` px-10 py-10 flex justify-center items-start w-full md:flex-row flex-col `}>
      <div className=" w-[50%] px-4 gap-2 flex-col justify-center flex">
        
         <h1 className=" text-[30px] text-black font-bold" >Hekto</h1>
         <div className=' flex flex-row' > 
          <input className=' px-10' placeholder='Enter Email Adress' type="text" />
          <button className=' text-white rounded-[3px] px-4 py-1 bg-[#116666]' >Sign up</button>
         </div>
         <div className=' flex flex-col' >
          <p className=' text-[#116666]' >Contact Infos:</p>
          <div>

          </div>


         </div>


      </div>

      <div className=" w-[50%] flex sm:flex-row flex-col sm:gap-2 gap-10 md:justify-between justify-around flex-wrap md:mt-0 mt-10 md:mb-0 sm:mb-0 mb-10 ">
        {footerLinks.map((footerLink,i) => (
          <div
            key={i}
            className=" flex flex-col sm:items-start items-center ss:my-0 my-4 min-w-[150px]"
          >
            <h4 className=" font-poppins font-medium text-[18px] text-black leading-[27px]">
              {footerLink.title}
            </h4>
            <ul className=" list-none mt-4 sm:text-start text-center ">
              {footerLink.links.map((link, index) => (
                <HashLink key={index} to={`${link.link}`} >
                  <li
                  onClick={()=>{setBool(prev=>!prev);setBool2(prev=>!prev)}}
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-gray-500 hover:underline cursor-pointer ${
                    index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                  } `}
                >
                  {link.name}
                </li>

                </HashLink>
                
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>



    <div className=" bg-[#BDE9C8]  flex w-full justify-between items-center md:flex-row flex-col py-6 px-10 " >
    <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-black">
    Copyright © 2022. Telnet .work
    </p>
    <div className="  flex flex-row md:mt-0 mt-6">
      {socialMedia.map((social, index) => (
        <img src={social.icon} alt={social.id} key={social.id} className={` w-[21px] h-[21px] object-contain cursor-pointer ${index!==socialMedia.length ? "mr-6"   : "mr-0"}`} />
      ))}
    </div>
  </div>
   
    
  </section>
  )
}

export default Footer