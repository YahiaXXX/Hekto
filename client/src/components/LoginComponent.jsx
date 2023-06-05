import React,{useContext, useState} from 'react'
import SocialCard from './SocialCard'
import apple from "../assets/logo-apple.svg"
import facebook from "../assets/logo-facebook.svg"
import google from "../assets/logo-google.svg"
import  { validEmail,validPassword } from "./Regex"
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import jwt_decode from "jwt-decode";
import AuthContext from '../contexts/AuthContext'
import Loader from './Loader'
import Cookies from 'js-cookie';


function LoginComponent() {
  const baseUrl= process.env.REACT_APP_BASE_URL
  const {setAuthTokens} = useContext(AuthContext)
  const [emailErr,setEmailErr]=useState(false);
  const [passwordErr,setPasswordErr]=useState(false);
  const [nameErr,setNameErr]=useState(false)
  const urlLogin = `http://localhost:8010/v1/api/user/login`
  const [name,setName]=useState("");
  const history=useNavigate()
  const [loading,setLoading]=useState(false)
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [passwordConfirmation,setPasswordConfirmation]=useState("");


  const validate=()=>{
    if(name.length<=6){
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
  }
  let loginUser = async () => {
    setLoading(true);
    try{
      let res = await axios.post(urlLogin, { email: email, password: password },{ withCredentials: true });

    const cookies = res.headers;
    console.log(res);
    setLoading(false);
    // setAuthTokens(Cookies.get('token'))
    // history("/");

    }
    catch(e){
      setLoading(false);
      console.log(e)
      // if(e.response.status===401){
      //   setErrorCred(true)
      // }

    }
  };

  return (
     <section className=' w-full flex-col flex justify-center items-center' >

     
      

      <div className=' xl:w-[50%] sm:w-[60%] ss:w-[70%] w-[90%] flex flex-col justify-center items-center ' >
        


        <div className='flex flex-col drop-shadow-lg md:w-[60%]  w-[90%] px-4 sm:py-4 py-0 bg-white backdrop-blur-2xl rounded-xl items-center  ' >

          <h1 className=' font-semibold text-[25px]' >Login</h1>


          <div className=' flex justify-center items-center w-full mt-2 ' >
           <p className=' text-gray-400' >please login using account details bellow</p>

          </div>
          <div className=' px-4 w-full flex flex-col sm:gap-2 gap-1 md:mt-8 mt-4' >
           
            <input 
            onChange={(e)=>setEmail(e.target.value)}
            type="email" 
            placeholder='Email'
            className=" w-[100%]   placeholder:text-gray-300 outline-none bg-transparent border-solid border-[1px] border-gray-200 px-2 py-1.5 mb-4 text-[#616161]"
            />
            <input 
            onChange={(e)=>setPassword(e.target.value)}
            type="password" 
            placeholder='Password'
            className=" w-[100%]   placeholder:text-gray-300 outline-none  bg-transparent border-solid border-[1px] border-gray-200 px-2 py-1.5 mb-4 text-[#616161]"
            />
          </div>
          <div className=' w-full flex justify-start items-center px-4' >
            <p className=' hover:underline hover:cursor-pointer hover:underline-offset-1 text-gray-400'  >Forgot your password?</p>
          </div>

          <div className=' px-4 w-full flex flex-col sm:gap-4 gap-2 justify-center items-center' >
            <button 
            onClick={loginUser}
            className=" flex justify-center items-center w-full font-roboto sm:mt-8 mt-3 h-10  bg-[#008000] font-semibold rounded-md text-white " >
              { loading ? <Loader/>      : "SIGN UP"}
              </button>
              
            

          </div>
          <div className=' my-4 h-[0.25px] bg-gray-100 w-[50%]' />
          <p>Don't have an account? <span className=' text-[#008000] font-semibold' > <Link to={"/register"} >Create an account</Link> </span> </p>




        </div>
      </div>





     </section>
  )
}

export default LoginComponent