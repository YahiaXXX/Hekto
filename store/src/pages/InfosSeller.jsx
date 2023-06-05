import React, { useContext, useEffect, useRef, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { AiFillCamera } from "react-icons/ai";
import AuthContext from "../contexts/AuthContext";
import axios from "axios";
import {HiOutlineLogout} from "react-icons/hi"
import Loader from "../components/Loader";

const InfosSeller = () => {
  const { baseUrl,logoutUser,setStatus } = useContext(AuthContext);
  const urlUpdate = `${baseUrl}activateShop`;
  const urlImg = `${baseUrl}uploadImage`;
  const [name, setName] = useState("");
  const [loading,setLoading]=useState(false)
  const [phone, setPhone] = useState("");
  const [pwd, setPwd] = useState("");
  const [adr, setAdr] = useState({
    ville: "",
    wilaya: "",
    street: "",
    codePostal: "",
  });

  // useEffect(() => {
  //   console.log({
  //     name: name,
  //     numberPhone: phone,
  //     password: pwd,
  //     address: adr,
  //     image: selectedFile,
  //   });
  // });

  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef();
  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  const globalFunc = async () => {
    handleSubmit().then(() => handleSubmit2());
  };

  const handleSubmit = async () => {
    setLoading(true)
    try {
      let res = await axios.put(urlUpdate,{
        name: name,
        numberPhone: phone,
        password: pwd,
        address: adr,
      },{ withCredentials: true });
      console.log(res);
    } catch (e) {
      console.log(e);
      setLoading(false)
    }
  };

  const handleSubmit2 = async () => {
    let data = new FormData()
    data.append("image",selectedFile)
    try {
      let res = await axios.put(urlImg,data,{
        headers:{
          'Content-Type':'multipart/form-data'
        },
        withCredentials: true 
      });

      console.log(res);
      setStatus(true)
      setLoading(false)
    } catch (e) {
      console.log(e);
      setLoading(false)
    }
  };

  return (
      <div className="w-[90%] z-[10] absolute animate-slideup flex flex-row justify-center items-center gap-10 px-6 py-16 bg-gradient-to-r from-green-200 to-lime-700 border border-gray-300 shadow-lg rounded-lg">
        <div className=" flex flex-col justify-center items-center h-full px-4 w-[70%] ">
          <h2 className="text-[62px] text-[#00B0FF] font-semibold text-center mb-6">
            Hekto Admin
          </h2>
          <div className=" mt-6 w-full">
            <div className="mb-4 w-full">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ring-blue-200 ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4 w-full">
              <label
                htmlFor="pwd"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                New password
              </label>
              <input
                type="password"
                id="pwd"
                className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ring-blue-200 ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your name"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="phone"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ring-blue-200 ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className=" flex flex-row justify-between flex-wrap items-center">
              <div className=" w-[45%] mb-6">
                <label
                  htmlFor="state"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ring-blue-200 ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter "
                  value={adr.wilaya}
                  onChange={(e) => {
                    setAdr({ ...adr, wilaya: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="w-[45%] mb-6">
                <label
                  htmlFor="town"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  town
                </label>
                <input
                  type="text"
                  id="town"
                  className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ring-blue-200 ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter "
                  value={adr.ville}
                  onChange={(e) => {
                    setAdr({ ...adr, ville: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="w-[45%] mb-6">
                <label
                  htmlFor="street"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Street
                </label>
                <input
                  type="text"
                  id="street"
                  className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ring-blue-200 ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your street"
                  value={adr.street}
                  onChange={(e) => {
                    setAdr({ ...adr, street: e.target.value });
                  }}
                  required
                />
              </div>
              <div className=" w-[45%] mb-6">
                <label
                  htmlFor="zip"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Zip code
                </label>
                <input
                  type="number"
                  id="zip"
                  className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ring-blue-200 ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your zip"
                  value={adr.codePostal}
                  onChange={(e) => {
                    setAdr({ ...adr, codePostal: e.target.value });
                  }}
                  required
                />
              </div>
            </div>

            <div className=" py-10 flex flex-row w-full justify-center items-center gap-10">
              <h1 className=" text-[22px] font-semibold">
                Upload your profile image:
              </h1>
              <div className=" flex flex-row justify-center items-center " >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                />
                <AiFillCamera
                  onClick={handleFileUpload}
                  className=" hover:cursor-pointer text-[40px]"
                />
                { selectedFile && <p>{selectedFile.name}</p>  }
              </div>
            </div>
          
          <div className="flex w-full flex-row justify-between items-center gap-8 " >
          <button
              onClick={globalFunc}
              className=" bg-blue-500 w-[40%] text-white h-10 flex justify-center items-center px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
             {loading ? <Loader/> : "save" } 
            </button>
            <button onClick={()=>logoutUser()}  className=" hover:text-primary text-[20px] flex justify-start px-6 gap-4 items-center " >
                
            Logout <HiOutlineLogout className=" text-[20px]" />
           
  
                </button>

          </div>
            

          </div>
        </div>
      </div>
  );
};

export default InfosSeller;
