import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import Cookies from 'js-cookie';
import hero from "../assets/shopping.svg"

import axios from "axios";
import Loader from "./Loader";

function LoginComponent() {
  const {baseUrl,setAuthTokens,setStatus} = useContext(AuthContext)
  let urlLogin = `${baseUrl}loginShop`
  const [email, setEmail] = useState(()=>
  localStorage.getItem('infos') ? JSON.parse(localStorage.getItem('infos'))?.email  : ""
  );
  const [password, setPassword] = useState(()=>
  localStorage.getItem('infos') ? JSON.parse(localStorage.getItem('infos'))?.pwd  : ""
  );
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  const handleClick = () => {
    setRemember((prev) => !prev);
  };

  let loginUser = async () => {
    setLoading(true);
    try{
      let res = await axios.post(urlLogin, { email: email, password: password },{ withCredentials: true });
      console.log(res.data)
      setAuthTokens(Cookies?.get('token'))
      setStatus(res.data)

      if(remember){
        localStorage.setItem('infos',JSON.stringify({
          email:email,
          pwd:password
        }))
        // localStorage.setItem('email',email)
        // localStorage.setItem('pwd',password)

      }
    setLoading(false);
    history("/");


   
   

    }
    catch(e){
      setLoading(false);
      console.log(e)

    }
  };
  return (
    <section className=" h-screen w-full flex flex-row">
      <div className=" h-full sm:w-[50%] w-full flex flex-col items-center justify-center ">
        <div className=" flex flex-col w-full h-full justify-center items-center sm:px-16 px-8 ">
          <div className=" w-full  flex gap-6 flex-col sm:items-start items-center ">
            <h2 className=" font-roboto sm:leading-[70px] leading-[50px] sm:text-[62px] text-[32px] main-gradient font-bold">
              Welcome Hekto seller
            </h2>
            <p className="text-base text-gray-500">
              Enter your email and password to sign in
            </p>
          </div>

          <div className="py-4 px-4 w-full flex flex-col justify-center items-center mt-10">
            <div className="w-full flex flex-col justify-center sm:items-start items-center">
              <div className=" w-[100%] md:w-[70%] flex justify-start items-center" >
              <p className=" text-[14px] font-semibold sm:mb-3 mb-2">Email</p>
              </div>
              
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email"
                className=" w-[100%] md:w-[70%]  placeholder:text-gray-300 outline-none rounded-md bg-transparent border-solid border-[1px] border-gray-400 px-2 py-1.5 mb-4 text-[#616161]"
              />
            </div>
            <div className=" w-full flex flex-col justify-center sm:items-start items-center mt-5">
            <div className=" w-[100%] md:w-[70%] flex justify-start items-center" >
            <p className=" text-[14px] font-semibold sm:mb-3 mb-2">
                Password
              </p>

            </div>
             
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                value={password}
                placeholder="Password"
                className=" w-[100%] md:w-[70%]  placeholder:text-gray-300 outline-none rounded-md bg-transparent border-solid border-[1px] border-gray-400 px-2 py-1.5 mb-4 text-[#616161]"
              />
              <div className="py-2 flex flex-row w-[100%] md:w-[70%] items-start ">
              <div
                className={`flex flex-row ${remember ? " bg-blue-300"   :"bg-gray-700"}  h-[30px] w-[70px] rounded-2xl cursor-pointer`}
                onClick={handleClick}
                style={{ transition: 'background-color 0.3s' }}
              >
                {!remember && (
                  <div className=" animate-slideright h-[20px] w-[30px] ml-[5px]  my-[5px]  bg-white rounded-2xl"></div>
                )}
                {remember && (
                  <div className=" animate-slideleft h-[20px] w-[30px] ml-[35px]  my-[5px] bg-white rounded-2xl"></div>
                )}
              </div>
              <p className=" font-semibold ml-2">Remember me</p>
            </div>
            </div>
            
          </div>

          <div className="w-full flex flex-col sm:items-start items-center mt-4 ">
            <div className=" flex flex-col ss:w-[70%]   gap-4">
              <button
                onClick={loginUser}
                className=" bg-green-400 flex justify-center items-center w-full font-roboto sm:mt-10 mt-5 h-10 rounded-md font-semibold text-white "
              >
                {loading ? <Loader /> : "SIGN IN"}{" "}
              </button>

              <div className=" w-full flex flex-row items-center justify-center gap-4">
                <p className=" font-semibold text-[22px]">
                  Don't have an account?
                  <span className="main-gradient font-semibold">
                    <Link className=" text-[18px] hover:cursor-pointer hover:underline text-slate-500 ">contact us</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" bgSlider  sm:flex hidden h-full w-[50%]">
        <img src={hero} alt="" className=" w-[100%] h-full relative" />
      </div>
    </section>
  );
}

export default LoginComponent;
