import React from 'react'
import { LoginComponent } from '../components'
import styles from "../style"
import hero from "../assets/hero.jpg"
import Footer from '../components/Footer'

function Login() {
  return (
    <div className=" w-full h-screen overflow-hidden">
    
    <div className={` flex-col w-full h-full flex justify-center items-center relative`} >
       
     <div className={` w-full h-full`} >
       <LoginComponent/>
     </div>
     <Footer/>

    

    </div>
    
    

</div>
  )
}

export default Login