import React from 'react'

function SocialCard({url,name,background}) {
  return (
    <div style={{background:background}} className=' border-[1px] border-[#C2C5E1] flex justify-center items-center w-full ss:h-[45px] h-[35px] rounded-md cursor-pointer' >
            <div className=' w-[30%] flex justify-center items-center ' >
            <img className=' w-8 h-8' src={url}/>

            </div>
           
           <p className={` ${background ? "text-white"   : "text-black" } w-[70%] font-semibold`} > {`Continue with ${name}`} </p>

    </div>
  )
}

export default SocialCard