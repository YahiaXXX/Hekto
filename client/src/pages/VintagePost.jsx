import React,{useRef, useState} from 'react'
import ProductComponent from '../components/ProductComponent'
import person from "../assets/person.png"
import {AiFillStar} from "react-icons/ai"
import brands from "../assets/brands.png"
import {BiImageAdd} from "react-icons/bi"
import axios from "axios"
import Loader from "../components/Loader"
import {motion} from "framer-motion"
import { useNavigate } from 'react-router-dom'


function VintagePost() {
    const postPost="http://localhost:8080/posts/create"
    const postImage="http://localhost:8080/posts/matchImageWithPost/"
    const [selectedFile,setSelectedFile]=useState(null)
    const fileInputRef = useRef(null);
    const navigate=useNavigate();
    const [loading,setLoading]=useState(false)
    const handleFileUpload = () => {
        fileInputRef.current.click();
      };
    
      const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        console.log(event.target.files[0]);
  
      };
   
       const [info,setInfo]=useState({
        name:"",
        desc:"",
        price:0,
 })

 const share= async ()=>{
  shareInfo().then((id)=>shareImage(id))


 }
 const shareInfo= async ()=>{
  setLoading(true)
    try{
      let res = await axios.post(postPost,{
        postTitle:info.name,
        postDescription:info.desc,
        postPrice:info.price
    },{withCredentials:true})
    console.log(res.data)
    return res.data.postId

    }
    catch(e){
      setLoading(false)

    }
 }
 const shareImage= async (id)=>{
  let url = `${postImage}${id}`
  let data=new FormData()
  data.append("file",selectedFile)
  try{
    let res = await axios.post(url,data,{withCredentials:true})
    setInfo({
      name:"",
      desc:"",
      price:0,
})
setSelectedFile(null)
setLoading(false)
navigate("/posts")
  }
  catch(e){
    setLoading(false)
    
  }
}

  return (
    <div className=' w-full flex flex-col  '  >
      <div className=' bg-[#BDE9C8] flex justify-center items-center top-0 w-full h-[200px]' >
    <div className='w-[50%] flex flex-col justify-center items-start ' >
          <h1 className="  font-roboto ss:leading-[70px] leading-[50px] text-[40px] text-[#101750] font-bold" >Vintage post</h1>
        </div>
        
      </div>

      <div className=' py-16 mt-2 flex justify-center items-center h-full flex-col gap-8 w-full' >
        <div className=' w-[70%] flex flex-row justify-start' >
        <h1 className=' text-[30px] text-black font-bold' >Product information:</h1>

        </div>
        
        <div className=' flex flex-col gap-10 py-16 px-10 w-[70%] bg-gray-100' >
            <div className='flex flex-col' >
              <label className=' font-semibold text-[#1D3178]' htmlFor="">Product name:</label>
              <input value={info.name} onChange={(e)=>setInfo({...info,name:e.target.value})} className=' outline-none bg-transparent border-b-[1px] border-[#00000049] ' type="text" placeholder='enter the name' />
            </div>
            <div className='flex flex-col'>
              <label className=' font-semibold text-[#1D3178]' htmlFor="">Description</label>
              <input value={info.desc} onChange={(e)=>setInfo({...info,desc:e.target.value})} className=' outline-none bg-transparent border-b-[1px] border-[#00000049] ' type="text" placeholder='enter a description for the product' />
            </div>
            <div className=' w-full flex gap-4 flex-row' >
                <div className=' w-[50%] flex flex-col ' >
                    <label className=' font-semibold text-[#1D3178]' htmlFor="">State:</label>
                    <select className=' outline-none bg-transparent border-b-[1px] border-[#00000049] ' name="" id="">
                        <option value="">5</option>
                        <option value="">8</option>
                        <option value="">10</option>
                    </select>

                </div>
                <div className= ' w-[50%] flex flex-col'>
                    <label className=' font-semibold text-[#1D3178]' htmlFor="">Price</label>
                    <input onChange={(e)=>setInfo({...info,price:parseInt(e.target.value)})} className=' outline-none bg-transparent border-b-[1px] border-[#00000049] ' type="number" placeholder='enter the price' />
                </div>

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
            <div className=' w-full flex flex-row justify-end items-center gap-2' >
            <motion.p whileHover={{scale:1.3}} transition={{duration:0.2}} className='' >
            <BiImageAdd 
            className=' hover:cursor-pointer text-[30px]' onClick={handleFileUpload} />
            </motion.p>
            
            <p className=' text-gray-500' > {selectedFile?.name} </p>
            </div>
            
                </div>
                
                
            
            </div>

            <div onClick={share} className=' w-full flex flex-row justify-end items-center mt-4' >
               <button className=' flex justify-center items-center text-white font-semibold rounded-[4px] hover:bg-opacity-50 h-10 w-[30%] bg-[#008000]' >{loading ? <Loader/>   : "share" }</button>
            </div>
            

        </div>

      </div>


        

    </div>
  )
}

export default VintagePost