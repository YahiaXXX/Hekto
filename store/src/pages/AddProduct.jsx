import React, { useEffect, useRef, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import axios from  "axios"

function AddProduct() {
  const [selectedFile, setSelectedFile] = useState(null);
  const bs = process.env.REACT_APP_COMMAND_BASE_URL
  const urlAdd=`${bs}products/create`
  const fileInputRef = useRef(null);
  const handleFileUpload = () => {
    fileInputRef.current.click();
  };
  const [productInfos,setProductInfos] = useState({
    name:"",
    desc:"",
    price:0,
    stock:0,
  })

  const addProduct= async ()=>{
    try{
      let res = await axios.post(urlAdd,{
        productName:productInfos.name, 
        productPrice:productInfos.price, 
        productQuantity:productInfos.stock, 
        productImageUrl:"hyhd", 
        productDesc:productInfos.desc, 
        categoryName:"azdazd"  
      },{withCredentials:true})
      console.log(res)
      setProductInfos({
        name:"",
        desc:"",
        price:0,
        stock:0,
      })

    }
    catch(e){
      console.log(e)
    }
  }

  useEffect(()=>{
    console.log(productInfos)
    console.log(selectedFile)
  })

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };
  return (
    <div className=" h-[80vh] w-full flex justify-center items-center">
      <div className=" bg-white flex flex-col gap-12 w-[70%] px-5 py-10 ">
        <input
          className=" w-full outline-none bg-transparent border-b-[1px] border-[#00000049] "
          type="text"
          placeholder="name"
          onChange={(e)=>{setProductInfos({...productInfos,name:e.target.value})}}
        />
        <input
          className=" w-[50%] outline-none bg-transparent border-b-[1px] border-[#00000049] "
          type="text"
          placeholder="description"
          onChange={(e)=>{setProductInfos({...productInfos,desc:e.target.value})}}
        />
        <input
          className=" w-[50%] outline-none bg-transparent border-b-[1px] border-[#00000049] "
          type="number"
          placeholder="price"
          onChange={(e)=>{setProductInfos({...productInfos,price:parseFloat(e.target.value)})}}
        />
        <input
          className=" w-[50%] outline-none bg-transparent border-b-[1px] border-[#00000049] "
          type="number"
          placeholder="stock"
          onChange={(e)=>{setProductInfos({...productInfos,stock:parseFloat(e.target.value)})}}
        />
        <div className="w-[50%] flex flex-col">
          <div className=" flex flex-row justify-between items-center">
            <label className=" font-semibold text-[#1D3178]" htmlFor="">
              Images
            </label>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />
            <div className=" flex flex-row gap-2 justify-center items-center" >
            <BiImageAdd className=" text-[30px]" onClick={handleFileUpload} />
            { selectedFile && <p className=" text-gray-400" >{selectedFile.name}</p> }

            </div>
           
          </div>
        </div>

        <button onClick={addProduct}  className=" mt-4 text-white font-semibold bg-[#008000] py-2 px-5">
          Share it
        </button>
      </div>
    </div>
  );
}

export default AddProduct;
