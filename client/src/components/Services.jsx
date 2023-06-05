import React from 'react'
import delivery from "../assets/delivery.svg"
import cash from "../assets/cashback.svg"
import quality from "../assets/quality.svg"
import support from "../assets/support.svg"

export const ServiceCard=({icon,title,text})=>(
    <div className=' h-[300px] drop-shadow-lg ss:w-[20%] w-[90%]  p-4 bg-white backdrop-blur-2xl rounded-md flex flex-col items-center justify-center mt-6 mb-6' >
        <div className=' w-full justify-center items-center flex' >
            
                <img src={icon} alt="person" className=' w-20 h-20' />
         </div>
         <h1 className=' font-semibold text-black' >{title}</h1>
         <p className=' mt-4 text-center text-black text-[12px]' >{text}</p>
        
        
    </div>
)


function Services() {
  return (
    <section className=' flex flex-col justify-center items-center mt-10 py-10 ' >
        <h1 className=' text-[25px] text-black font-bold' >What Hekto offer!</h1>
        <div className=' flex ss:flex-row flex-col flex-wrap gap-4 justify-center items-center ' >
            <ServiceCard icon={delivery} title="24/7 Support" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida." /> 
            <ServiceCard icon={cash} title="24/7 Support" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida." /> 
            <ServiceCard icon={quality} title="24/7 Support" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida." /> 
            <ServiceCard icon={support} title="24/7 Support" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida." /> 

        </div>
    </section>
  )
}

export default Services