import React from 'react'
import hero from "../assets/hero.svg"

function UniqueFeatures() {
  return (
    <section className=' bg-[#BDE9C8] flex flex-row justify-center items-center px-16 ' >
         <div className=' py-4 flex-1' >
         
            <img src={hero} alt="" />
        
    </div>


    <div className=' flex-1 flex flex-col' >
        <h1 className=' text-[30px] text-black font-semibold'  >Unique Features Of leatest &
 <br /> Trending Poducts</h1>
        <ul className='list-disc ml-4' >
            <li className=''  >Lorem ipsum dolor sit amet consectetur Culpa </li>
            <li className='' >Lorem ipsum dolor sit amet consectetur Culpa </li>
            <li>Lorem ipsum dolor sit amet consectetur Culpa </li>
        </ul>

<div className='flex flex-row gap-2' >
<button className='mt-6 w-40 bg-[#42A4A4] text-white py-2 px-4' >
    Add to cart

   </button>
   <div className=' justify-end flex flex-col' >
     <p className=' text-[##151875] font-semibold ' > B&B Italian </p>
     <p className='text-[##151875]' >32$
     </p>

   </div>

</div>
   

    </div>
   

</section>
  )
}

export default UniqueFeatures