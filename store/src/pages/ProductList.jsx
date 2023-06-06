import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bag from "../assets/bag.svg";
import { IoMdAdd } from "react-icons/io";
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { useEffect } from "react";
import UpdateProductPopup from "../components/UpdateProductPopup";
import { AiFillDelete } from "react-icons/ai";
import {motion} from "framer-motion"
import Select from "react-select"
import searchsvg from "../assets/search.svg"

export const Prod = ({
  img,
  name,
  text,
  setToggle,
  setBool,
  qte,
  price,
  id,
  bool,
  item,
  setInfoPopup,
  products,
  setProducts
}) => {
  const bs = process.env.REACT_APP_COMMAND_BASE_URL;
  const urlDelete = `${bs}products/delete/${id}`;
  const deleteProduct = async () => {
    try {
      let res = await axios.delete(urlDelete, { withCredentials: true });
      console.log(res)
     let newArr = products.filter((it)=>
        item!==it
      )
      setProducts(newArr)
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div
      onClick={() => {setToggle(true);setInfoPopup(item)}}
      className="hover:cursor-pointer relative flex flex-col  justify-center items-center"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          deleteProduct();
          
        }}
        className=" hover:cursor-pointer hover:bg-opacity-0 text-[20px] bg-white bg-opacity-40 absolute p-2 z-10 top-1 left-1 rounded-full"
      >
        <AiFillDelete className=" text-red-500" />
      </div>
      <div className=" bg-green-900 bg-opacity-30 p-4">
      <motion.div  whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.5 }}>
        <img src={img} alt="" className=" w-full h-full object-contain" />
        </motion.div>
      </div>

      <h1 className=" font-bold text-[#151875]">{name}</h1>
      <p className=" text-[#151875]">QTE: {qte}</p>
      <p className=" text-[#151875]">Price: {price}</p>
    </div>
  );
};

function ProductList() {
  const { baseUrl } = useContext(AuthContext);
  const bs = process.env.REACT_APP_QUERY_BASE_URL;
  const bsAdmin = process.env.REACT_APP_QUERY_ADMIN_BASE_URL
  const urlCategory = `${bsAdmin}categories/getAll`
  const urlGet = `${bs}products/getAllProducts`;
  const urlGreater=`${bs}products/findProductEntitiesByProductPriceIsGreaterThanEqual`
  const urlLess=`${bs}products/findProductEntitiesByProductPriceIsLessThanEqual`
  const urlGetByCategory=`${bs}products/getProductByCategoryName/`
  const urlSearch=`${bs}products/getAllProductsWithNameLike`
  const [bool, setBool] = useState(false);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [infoPopup,setInfoPopup]=useState({})
  const [selectedOption,setSelectedOption]=useState(null)
  const [selectOption, setSelectOptions] = useState([]);
  const [lessThan,setLessThan]=useState(0)
  const [greaterThan,setGreaterThan]=useState(0)
  const [search,setSearch]=useState("")
  const [imageUrl,setImageUrl]=useState('')
  const [filtredData,setFiltredData]=useState([])


  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };


  const getSearched= async ()=>{
    try{
      let tmp =products.filter(obj => obj.productName.includes("ab"));
      let res = await axios.get(`${urlSearch}?productNameLike=${search}`,{withCredentials:true})
      console.log(res)

    }
    catch(e){
      console.log(e)
    }
  }

  function findIntersection(arr1, arr2, arr3) {
    const nonNullArrays = [arr1, arr2, arr3].filter(arr => arr !== null);
    
    if (nonNullArrays.length === 0) {
      return [];
    }
    
    const intersection = nonNullArrays[0].filter(obj1 => {
      const id = obj1.productId;
      return nonNullArrays.every(arr => arr.some(obj2 => obj2.productId === id));
    });
    
    return intersection;
  }

  const apply= async ()=>{
    let a=null;
    let b=null;
    let c=null
    if(greaterThan!==0){
      a=products.filter(item=>item.productPrice>greaterThan)
    }
    if(lessThan!==0){
    b=products.filter(item=>item.productPrice<lessThan)
    }
    if(selectedOption!==null){ 
    c=products.filter(item=>item.categoryName===selectedOption.label)   
    }
    let intersection = findIntersection(a, b, c);
    console.log(intersection)
    setFiltredData(intersection)
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


  const getProducts = async () => {
    try {
      let res = await axios.get(urlGet, { withCredentials: true });
      setProducts(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  
  useEffect(()=>{
   apply()
  },[lessThan,greaterThan,selectedOption])


  useEffect(() => {
    getProducts();
    getCategory()
  }, []);

  useEffect(()=>{
   getSearched()
  },[search])

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
      outline: "none",
      boxShadow: "none",
      borderRadius: "0",
      backgroundColor: "white",
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

  
  return (
    <>
    <div class="h-[10%] flex flex-row w-full mx-auto p-4">
    <div class=" flex-1 flex items-center space-x-4">
      <div class="flex items-center space-x-2">
        <label for="lowerPrice" class="text-gray-600">Price:</label>
        <input onChange={(e)=>e.target.value==="" ? setLessThan(0) : setLessThan(parseFloat(e.target.value))} type="number" id="lowerPrice" placeholder="Lower than" className=" outline-none border border-gray-300 px-2 py-1 rounded"/>
      </div>
      <div class="flex items-center space-x-2">
        <input onChange={(e)=>e.target.value==="" ? setGreaterThan(0) : setGreaterThan(parseFloat(e.target.value))} type="number" id="upperPrice" placeholder="Upper than" className=" outline-none border border-gray-300 px-2 py-1 rounded"/>
      </div>
      <div class="flex items-center space-x-2">
        <label for="category" className="text-gray-600">Category:</label>
        <Select
                  className=" absolute z-30 w-[100%]"
                  placeholder="Select"
                  styles={customStyles}
                  options={selectOption}
                  value={selectedOption}
                  onChange={handleChange}
                />
      </div>
      {/* <button onClick={apply} class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">Apply</button> */}
    </div>
    <div className=" flex-2 " >
    <div className="px-4 flex w-[100%]  justify-start items-center relative">
      <input onChange={(e)=>{setSearch(e.target.value)}} className=' w-[100%] px-10 drop-shadow-md py-2 rounded-2xl border-color border-[0.25px] outline-none' type="search" placeholder='Search...'  />
      <img src={searchsvg} className="absolute ml-2 w-6 h-6" alt="search" />
      </div>
    </div>
  </div>
  <div className=" overflow-scroll h-[90%] flex justify-start items-start flex-row flex-wrap gap-10 px-10 py-5 ">
      {toggle && (
        <div className=" fixed left-0 top-0 w-[100%] h-screen bg-black bg-opacity-60 backdrop-blur-sm z-[9999] flex justify-center items-center  ">
          <UpdateProductPopup
            products={products}
            setProducts={setProducts}
            setToggle={setToggle}
            img={'data:image/svg+xml;base64,' + infoPopup.productImageUrl}
            id={infoPopup.productId}
            name={infoPopup.productName}
            desc={infoPopup.productDesc}
            price={infoPopup.productPrice}
            qte={infoPopup.productQuantity}
            shopId={infoPopup.shopId}
            setBool={setBool}
          />
        </div>
      )}
     {   products
  .filter(item => item.productName.includes(search))
  .map((item, index) => (
    <Prod
      key={item.productId}
      products={products}
      setProducts={setProducts}
      setToggle={setToggle}
      img={'data:image/svg+xml;base64,' + item.productImageUrl}
      id={item.productId}
      name={item.productName}
      text={item.productDesc}
      price={item.productPrice}
      qte={item.productQuantity}
      item={item}
      setInfoPopup={setInfoPopup}
    />
  ))}
  <img src={imageUrl} alt="" />
      <button
        onClick={() => navigate("/product/add")}
        className=" absolute z-10 bottom-4 right-4 flex justify-center items-center p-4 bg-white backdrop-blur-md drop-shadow-xl rounded-full"
      >
        <IoMdAdd className=" font-bold text-[40px]" />
      </button>
    </div>
    </>
    
  );
}

export default ProductList;
