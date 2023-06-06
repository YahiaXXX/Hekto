import React, { useEffect, useRef, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import axios from  "axios"
import Select from "react-select"

function AddProduct() {
  const [selectedFile, setSelectedFile] = useState(null);
  const bs = process.env.REACT_APP_COMMAND_BASE_URL
  
  const bsAdmin = process.env.REACT_APP_QUERY_ADMIN_BASE_URL
  const urlCategory = `${bsAdmin}categories/getAll`
  const urlAdd=`${bs}products/create`
  const urlImage=`${bs}products/matchImageWithProduct/`
  const fileInputRef = useRef(null);
  const handleFileUpload = () => {
    fileInputRef.current.click();
  };
  const customStyles = {
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#1C1817",
    }),
    control: (provided) => ({
      ...provided,
      border: "none",
      borderBottom:"1px solid black",
      outline: "none",
      boxShadow: "none",
      borderRadius: "0",
      backgroundColor: "transparent",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#4299e1" : "#fff",
      color: state.isSelected ? "#fff" : "#4a5568",
      ":hover": {
        backgroundColor: "#EDE0DD",
      },
    }),
  };

  const [selectedOption,setSelectedOption]=useState(null)
  const [selectOption, setSelectOptions] = useState([]);
  const [productInfos,setProductInfos] = useState({
    name:"",
    desc:"",
    price:0,
    stock:0,
  })
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const globalFunc= async ()=>{
    addProduct().then(id=>addImage(id))
  }

  const getCategory= async ()=>{
     try{
      let res = await axios.get(urlCategory,{withCredentials:true})
        let newArr=res.data.map((item,index)=>({
          label:item.categoryName,
          value:item.categoryId,
        }))
        setSelectOptions(newArr)
     }
     catch(e){

     }
  }

  const addImage=async(id)=>{
    let data = new FormData()
    data.append("file",selectedFile)
    try{
      let res = await axios.post(`${urlImage}${id}`,data,{withCredentials:true})
      setSelectedFile(null) 
    }
    catch(e){
      console.log(e)
    }
  }

  const addProduct= async ()=>{
    try{
      console.log({
        productName:productInfos.name, 
        productPrice:productInfos.price, 
        productQuantity:productInfos.stock,
        productDesc:productInfos.desc, 
        categoryName:selectedOption.label  
      })
      let res = await axios.post(urlAdd,{
        productName:productInfos.name, 
        productPrice:productInfos.price, 
        productQuantity:productInfos.stock, 
        productDesc:productInfos.desc, 
        categoryName:selectedOption.label  
      },{withCredentials:true})
      setProductInfos({
        name:"",
        desc:"",
        price:0,
        stock:0,
      })
      setSelectedOption(null)
      return res?.data?.productId

    }
    catch(e){
      console.log(e)
    }
  }
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };

useEffect(()=>{
  getCategory()
})




  return (
    <div className=" h-[80vh] w-full flex justify-center items-center">
      <div className=" bg-white flex flex-col gap-12 w-[70%] px-5 py-10 ">
        <input
          className=" w-full outline-none bg-transparent border-b-[1px] border-[#00000049] "
          type="text"
          placeholder="name"
          value={productInfos.name}
          onChange={(e)=>{setProductInfos({...productInfos,name:e.target.value})}}
        />
         <Select
                  className="w-[100%]"
                  placeholder="Select"
                  styles={customStyles}
                  options={selectOption}
                  value={selectedOption}
                  onChange={handleChange}
                />
        <input
          className=" w-[50%] outline-none bg-transparent border-b-[1px] border-[#00000049] "
          type="text"
          placeholder="description"
          value={productInfos.desc}
          onChange={(e)=>{setProductInfos({...productInfos,desc:e.target.value})}}
        />
        <input
          className=" w-[50%] outline-none bg-transparent border-b-[1px] border-[#00000049] "
          type="number"
          placeholder="price"
          value={productInfos.price}
          onChange={(e)=>{setProductInfos({...productInfos,price:parseFloat(e.target.value)})}}
        />
        <input
          className=" w-[50%] outline-none bg-transparent border-b-[1px] border-[#00000049] "
          type="number"
          value={productInfos.stock}
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

        <button onClick={globalFunc}  className=" mt-4 text-white font-semibold bg-[#008000] py-2 px-5">
          Add
        </button>
      </div>
    </div>
  );
}

export default AddProduct;
