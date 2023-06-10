import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
import {motion} from "framer-motion"

const Slider = ({products}) => {
  
  const slides=products.map(item=>({
    url:'data:image/svg+xml;base64,'+item?.productImageUrl,
    id:item?.productId
  }))

  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate=useNavigate()

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      <motion.div
      
       onClick={()=>navigate(`/product/${slides[currentIndex]?.id}`)}
        // style={{ backgroundImage: `url(${slides[currentIndex]?.url})` }}
        className=' bgSlider hover:cursor-pointer flex justify-center items-center w-full h-full rounded-2xl bg-center bg-cover duration-500'
      >
        <motion.img whileHover={{scale:0.9}}
      transition={{duration:0.5}} src={slides[currentIndex]?.url} className=' w-full h-full object-contain' alt="" />
      </motion.div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides?.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;