import React,{useRef, useState} from 'react'
import ProductComponent from '../components/ProductComponent'
import person from "../assets/person.png"
import {AiFillStar} from "react-icons/ai"
import brands from "../assets/brands.png"
import {BiImageAdd} from "react-icons/bi"


function VintagePost() {
  
    const [selectedFile,setSelectedFile]=useState(null)
    const fileInputRef = useRef(null);
    const handleFileUpload = () => {
        fileInputRef.current.click();
      };
    
      const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        console.log(event.target.files[0]);
      };

  return (
    <div className=' w-full min-h-screen flex flex-col  '  >
      <div className=' bg-[#BDE9C8] flex justify-center items-center top-0 w-full h-[300px]' >
    <div className='w-[50%] flex flex-col justify-center items-start ' >
          <h1 className="  font-roboto ss:leading-[70px] leading-[50px] text-[40px] text-[#101750] font-bold" >Vintage post</h1>
        </div>
        
      </div>

      <div className=' mt-6 flex justify-center items-center flex-col gap-8 w-full' >
        <div className=' w-[50%] flex flex-row justify-start' >
        <h1 className=' text-[30px] text-black font-semibold' >Product information</h1>

        </div>
        
        <div className=' flex flex-col gap-10 py-10 px-10 w-[50%] bg-gray-100' >
            <div className='flex flex-col' >
              <label className=' font-semibold text-[#1D3178]' htmlFor="">Product name:</label>
              <input className=' outline-none bg-transparent border-b-[1px] border-[#00000049] ' type="text" placeholder='enter the name' />
            </div>
            <div className='flex flex-col'>
              <label className=' font-semibold text-[#1D3178]' htmlFor="">Description</label>
              <input className=' outline-none bg-transparent border-b-[1px] border-[#00000049] ' type="text" placeholder='enter a description for the product' />
            </div>
            <div className=' w-full flex gap-4 flex-row' >
                <div className=' w-[50%] flex flex-col ' >
                    <label className=' font-semibold text-[#1D3178]' htmlFor="">State:</label>
                    <select className=' outline-none bg-transparent border-b-[1px] border-[#00000049] ' name="" id="">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                    </select>

                </div>
                <div className= ' w-[50%] flex flex-col'>
                    <label className=' font-semibold text-[#1D3178]' htmlFor="">Price</label>
                    <input className=' outline-none bg-transparent border-b-[1px] border-[#00000049] ' type="text" placeholder='enter the price' />
                </div>

            </div>
            <div className=' w-[50%] flex flex-col'>
                <label className=' font-semibold text-[#1D3178]'  htmlFor="">Quantity</label>
                <input className=' outline-none bg-transparent border-b-[1px] border-[#00000049] ' type="text" />
            </div>
            <div className=' w-[50%] flex flex-col'>
                <div className=' flex flex-row justify-between items-center' >
                <label className=' font-semibold text-[#1D3178]' htmlFor="">Images</label>
                <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />
            <BiImageAdd className=' text-[30px]' onClick={handleFileUpload} />
                </div>
                
                
            
            </div>

            <div className=' w-full flex flex-row justify-end items-center mt-4' >
               <button className=' text-white font-semibold rounded-xl h-10 w-[30%] bg-[#008000]' >Sale it</button>
            </div>
            

        </div>

      </div>


        

    </div>
  )
}

export default VintagePost