import React, { useEffect, useRef, useState } from "react";
import {GiCancel} from "react-icons/gi"
import Loader from './Loader'
import { BiImageAdd } from "react-icons/bi";
import axios from "axios"

function UpdateProductPopup(props) {
  const bs = process.env.REACT_APP_COMMAND_BASE_URL;
  const urlUpdate=`${bs}products/update/${props.id}`
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading,setLoading]=useState(false)
    const [info,setInfo]=useState({
      img:props.bag,
      name:props.name,
      desc:props.desc,
      price:props.price,
      qte:props.qte,
      shopId:props.shopId

    })
    const fileInputRef = useRef(null);
  const handleFileUpload = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  const handleUpdate= async ()=>{
    try{
      let res = await axios.patch(urlUpdate,{
        shopId:info.shopId,
        productName:info.name, 
        productPrice:info.price, 
        productQuantity:info.qte, 
        productImageUrl:"das", 
        productDesc:info.desc, 
        categoryName:"dasdas"
      },{withCredentials:true})
      
    }
    catch(e){
      console.log(e)
    }

  }

  useEffect(()=>{
     console.log(selectedFile)
     console.log(info.img)
  })
  return (
    <div className=" pb-8 pt-2  flex justify-center flex-col items-center animate-slideup dark:bg-white bg-[#1C1817]  md:w-[50%] w-[90%] rounded-[24px] z-[10] absolute px-8 ">
        <div className=' w-full flex justify-end' >
          <GiCancel onClick={()=>{props.setToggle(false)}} className=' hover:cursor-pointer hover:drop-shadow-xl rounded-full text-white text-[30px]' />


        </div>
        <div className=' mt-4 justify-center items-center flex flex-row w-full' >
        <img src={info.img} alt="" className=' flex-1 w-full h-full' />
       <div className='flex-1 text-[20px] text-white  flex flex-col gap-5 justify-start items-start' >
        <div className=' w-full flex flex-row gap-3 justify-between items-center' >
            <p>Name:</p>
            <input onChange={(e)=>{setInfo({...info,name:e.target.value})}} value={info.name} className='w-[80%] outline-none py-1 px-2 bg-transparent border-[1px] border-[#FFF] border-opacity-40 rounded-md '  type="text"/>

        </div>
        <div className='w-full flex flex-row gap-3 justify-between items-center' >
            <p>Price:</p>
            <input onChange={(e)=>{setInfo({...info,price:e.target.value})}} value={info.price} className='w-[80%] outline-none py-1 px-2 bg-transparent border-[1px] border-[#FFF] border-opacity-40 rounded-md '  type="text"/>

        </div>
        <div className='w-full flex flex-row gap-3 justify-between items-center' >
            <p>Qte:</p>
            <input onChange={(e)=>{setInfo({...info,qte:e.target.value})}} value={info.qte} className='w-[80%] outline-none py-1 px-2 bg-transparent border-[1px] border-[#FFF] border-opacity-40 rounded-md '  type="text"/>

        </div>
        
        <div className='w-full flex flex-row gap-3 justify-between items-center' >
            <p>Desc:</p>
            <textarea onChange={(e)=>{setInfo({...info,desc:e.target.value})}} style={{resize:"none"}} value={info.desc} className=' w-[80%] outline-none py-1 px-2 bg-transparent border-[1px] border-[#FFF] border-opacity-40 rounded-md '  type="text"/>

        </div>
        <div className=" w-full flex flex-row justify-between items-center" >
            <p>Image:</p>
            <div className=" flex flex-row gap-2 justify-center items-center" >
            
            { selectedFile && <p className=" text-gray-400" >{selectedFile.name}</p> }
            <BiImageAdd className=" text-[30px]" onClick={handleFileUpload} />
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />

            </div>
            

            </div>

        <div className=' mt-5 flex justify-end items-center w-full ' >
            <button onClick={handleUpdate} className=' text-white rounded-[4px] h-10 w-full bg-green-500 ' >
                 {loading ? <Loader/>   : "save" }
            </button>

        </div>

       </div>


        </div>

        
       


    </div>
  )
}

export default UpdateProductPopup