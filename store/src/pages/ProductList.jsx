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
  setInfoPopup
}) => {
  const bs = process.env.REACT_APP_COMMAND_BASE_URL;
  const urlDelete = `${bs}products/delete/${id}`;
  const deleteProduct = async () => {
    try {
      let res = await axios.delete(urlDelete, { withCredentials: true });
      setBool(prev=>!prev);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div
      onClick={() => {setToggle(true);setInfoPopup(item)}}
      className=" relative flex flex-col  justify-center items-center"
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
        <img src={img} alt="" className=" w-full h-full object-contain" />
      </div>
      <h1 className=" font-bold text-[#151875]">{name}</h1>
      <p className="font-bold text-[#151875]">{text}</p>
    </div>
  );
};

function ProductList() {
  const { baseUrl } = useContext(AuthContext);
  const bs = process.env.REACT_APP_QUERY_BASE_URL;
  const urlGet = `${bs}products/getAllProducts`;
  const [bool, setBool] = useState(false);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [infoPopup,setInfoPopup]=useState({})

  const getProducts = async () => {
    try {
      let res = await axios.get(urlGet, { withCredentials: true });
      console.log(res);
      setProducts(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  

  useEffect(() => {
    getProducts();
  }, [bool]);
  return (
    <div className=" overflow-scroll flex justify-start items-start h-full flex-row flex-wrap gap-10 px-10 py-5 ">
      {toggle && (
        <div className=" fixed left-0 top-0 w-[100%] h-screen bg-black bg-opacity-60 backdrop-blur-sm z-[9999] flex justify-center items-center  ">
          <UpdateProductPopup
            setToggle={setToggle}
            img={bag}
            name={infoPopup.productName}
            desc={infoPopup.productDesc}
            price={infoPopup.productPrice}
            qte={infoPopup.productQuantity}
            shopId={infoPopup.shopId}
          />
        </div>
      )}
      {products.map((item, index) => (
        <Prod
          key={item.productId}
          setBool={setBool}
          bool={bool}
          setToggle={setToggle}
          img={bag}
          id={item.productId}
          name={item.productName}
          text={item.productDesc}
          price={item.productPrice}
          qte={item.productQuantity}
          item={item}
          setInfoPopup={setInfoPopup}
        />
      ))}
      <button
        onClick={() => navigate("/product/add")}
        className=" absolute z-10 bottom-4 right-4 flex justify-center items-center p-4 bg-white backdrop-blur-md drop-shadow-xl rounded-full"
      >
        <IoMdAdd className=" font-bold text-[40px]" />
      </button>
    </div>
  );
}

export default ProductList;
