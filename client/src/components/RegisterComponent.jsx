import React, { useState } from "react";
import SocialCard from "./SocialCard";
import apple from "../assets/logo-apple.svg";
import facebook from "../assets/logo-facebook.svg";
import google from "../assets/logo-google.svg";
import { validEmail, validPassword } from "./Regex";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function RegisterComponent() {
  const baseUrl = process.env.REACT_APP_AUTH_BASE_URL;
  // const urlRegister=`${baseUrl}createUser`
  const urlRegister = `http://localhost:8010/v1/api/user/createUser`;
  const [emailErr, setEmailErr] = useState(false);
  const navigate=useNavigate()
  const [passwordErr, setPasswordErr] = useState(false);
  const [nameErr, setNameErr] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (name.length <= 6) {
      setNameErr(true);
      return false;
    }
    if (!validEmail.test(email)) {
      setEmailErr(true);
      return false;
    }
    if (!validPassword.test(password)) {
      setPasswordErr(true);
      return false;
    }
    return true;
  };
  const handleRegister = async () => {
    if (validate) {
      setLoading(true);
      try {
        let res = await axios.post(urlRegister, {
          name: name,
          email: email,
          password: password,
        });
        console.log(res);
        navigate("/login")
        
      } catch (e) {
        console.error(e);
      }
    }
  };
  return (
    <section className=" w-full h-full flex-col flex justify-center items-center">
      <div className=" xl:w-[50%] sm:w-[60%] ss:w-[70%] w-[90%] flex flex-col justify-center items-center ">
        <div className="flex flex-col drop-shadow-lg md:w-[60%]  w-[90%] px-4 sm:py-4 py-0 bg-white backdrop-blur-2xl rounded-xl items-center  ">
          <h2 className=" font-semibold text-[25px]">Register</h2>
    
          <div className=" px-4 w-full flex flex-col sm:gap-2 gap-1 md:mt-8 mt-4">
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
              className=" w-[100%]  placeholder:text-gray-300 outline-none bg-transparent border-solid border-[1px] border-gray-200 px-2 py-1.5 mb-4 text-[#616161]"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className=" w-[100%]   placeholder:text-gray-300 outline-none bg-transparent border-solid border-[1px] border-gray-200 px-2 py-1.5 mb-4 text-[#616161]"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className=" w-[100%]   placeholder:text-gray-300 outline-none  bg-transparent border-solid border-[1px] border-gray-200 px-2 py-1.5 mb-4 text-[#616161]"
            />
            {/* <input 
            onChange={(e)=>setPasswordConfirmation(e.target.value)}
            type="password" 
            placeholder='Password confirmation'
            className=" w-[100%]   placeholder:text-gray-300 outline-none bg-transparent border-solid border-[1px] border-gray-200 px-2 py-1.5 mb-4 text-[#616161]"
            /> */}
            {/* <div className=' flex flex-row gap-2' >
              <input type="checkbox" className='cursor-pointer border-[1px] rounded-xl w-4' />
              <p className=' text-[15px]' >I agree the <span className=' font-semibold' > <a href="">Terms and Conditions</a> </span> </p>

            </div> */}
          </div>

          <div className=" px-4 w-full flex flex-col sm:gap-4 gap-2 justify-center items-center">
            <button
              onClick={handleRegister}
              className=" flex justify-center items-center w-full font-roboto sm:mt-8 mt-3 h-10  bg-[#008000] font-semibold text-[12px] rounded-md text-white "
            >
              {/* { loading ? <Spinner2 height={25} width={25} color="#FFF" />      : "SIGN UP"} */}
              Sign up
            </button>
            <p className=" text-gray-400">
              By joining I agree to receive emails
            </p>
          </div>
          <div className=" my-4 h-[0.25px] bg-gray-100 w-[50%]" />
          <p>
            Already have an account?{" "}
            <span className=" text-[#008000] font-semibold">
              {" "}
              <Link to={"/login"}>Sign in</Link>{" "}
            </span>{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default RegisterComponent;
