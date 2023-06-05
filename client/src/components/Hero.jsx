import React from 'react'
import hero from "../assets/hero.svg"
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

function Hero() {
  return (
    // <Slider dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1}>
    <section className=' bg-[#BDE9C8] flex flex-row justify-center items-center px-16 py-10' >
    <div className=' flex-1 flex flex-col' >
        <p className=' text-[14px] text-green-500' >Best fourniture for your castle</p>
        <h1 className=' text-[30px] text-black font-semibold'  >Best Product solution for <br /> you in one website</h1>
        <p className=' text-gray-400' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
in phasellus non in justo.</p>


   <button className=' mt-6 h-10 w-40 bg-[#42A4A4] text-white py-2 px-4' >
    Shop now

   </button>

    </div>
    <div className=' py-4 flex-1' >
        <img src={hero} alt="" />
    </div>

</section>



  )
}

export default Hero