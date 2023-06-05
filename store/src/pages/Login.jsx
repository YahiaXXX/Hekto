import React from 'react'
import  LoginComponent from '../components/LoginComponent'

function Login() {
  return (
    <div className=" w-full min-h-screen overflow-hidden">
    
    <div className={` flex-col w-full h-full flex justify-center items-center relative`} >
       
     <div className={` min-h-screen w-full h-full`} >
       <LoginComponent/>
     </div>

    

    </div>
    
    

</div>
  )
}

export default Login