import React, { useContext, useEffect, useRef, useState } from "react";
import { AiFillCamera } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { BiLogOutCircle } from "react-icons/bi";
import AuthContext from "../contexts/AuthContext";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Settings() {
  const { logoutUser, baseUrl } = useContext(AuthContext);
  const urlGet = `${baseUrl}getcurrentShop`;
  const urlUpdate = `${baseUrl}updateShop`;
  const urlImage = `${baseUrl}uploadImage`;
  const fileInputRef = useRef();
  const [imgUrl, setImgUrl] = useState("");
  const [pic, setPic] = useState();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  // const [adr, setAdr] = useState({
  //   street: "",
  //   ville: "",
  //   wilaya: "",
  // });
  const [profilInfo, setProfileInfo] = useState({
    name: "",
    numberPhone: "",
    email: "",
    password: "",
    address: null,
    image: "",
  });

  const getInfo = async () => {
    try {
      let res = await axios.get(urlGet, { withCredentials: true });
      setProfileInfo(res.data);
      if (res.data.image !== null) {
        setImgUrl(
          require(`C:/Users/apple pro/OneDrive/Desktop/tmp/ms-auth/images/${res?.data?.image}`)
        );
      }

      // setAdr({
      //   street: res?.data?.address?.street,
      //   ville: res?.data?.address?.ville,
      //   wilaya: res?.data?.address?.wilaya,
      // });
      
    } catch (e) {}
  };

  const updateInfo = async () => {
    setLoading(true);
    let { image,active,enabled,shopId,role, ...rest } = profilInfo;
    console.log(rest);
    try {
      let res = await axios.patch(urlUpdate,  { 
      "name":profilInfo.name,
      "password": profilInfo.password,
      "numberPhone": profilInfo.numberPhone,
      "address": {
          "ville": profilInfo.address.ville,
          "wilaya": profilInfo.address.wilaya,
          "street": profilInfo.address.street,
          "codePostal": profilInfo.address.codePostal
       }
  
    }, { withCredentials:true});
      console.log(res);
      toast.success('your informations are updated!')
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  const globalFunc = async () => {
    updateInfo().then(() => updateImage());
  };

  const updateImage = async () => {
    let data = new FormData();
    data.append("image", pic);
    try {
      let res = await axios.put(urlImage, data, { withCredentials: true });
      setPic(null);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);
  useEffect(()=>{
    console.log(profilInfo)
  },[profilInfo])

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (event) => {
    let file = event.target.files[0];
    if (file.type.startsWith("image/")) {
      setPic(event.target.files[0]);
    } else {
      setPic(null);
    }
  };

  return (
    <div className={`w-full py-4 `}>
      <div className=" w-full h-[80%]">
        <div className=" h-[15%] w-full flex flex-row items-center justify-between px-8">
          <div
            onClick={() => {}}
            className="w-[80%] sm:pl-20 pl-0 relative  h-full hover:cursor-pointer justify-start items-center gap-2 flex flex-row"
          >
            <div className=" bg-white border-[4px] border-[#00c036] rounded-full w-[100px] h-[100px] ">
              <div className="absolute ml-14 mt-20 flex justify-center items-center rounded-full h-7 w-7 bg-green-500">
                <AiFillCamera
                  onClick={handleFileUpload}
                  className=" hover:cursor-pointer text-white"
                />
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
              <img
                src={imgUrl}
                alt=""
                className=" rounded-full h-full w-full"
              />
            </div>

            <div className=" w-[50%] ">
              <div>
                {pic && (
                  <p className=" text-[10px] text-red-600 ">
                    {" "}
                    click edit to change your image to : {pic.name}{" "}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex ss:mt-5 mt-0 flex-col gap-2 justify-center items-center py-10 ">
          <div className="flex flex-col ss:gap-8 justify-center ss:items-start sm:w-[70%] w-[90%] h-full ">
            <div className=" h-[70%] justify-center py-2 px-2 items-start w-full flex flex-col">
              <div className={` mt-3 ss:w-[70%] w-full gap-1 flex flex-col`}>
                <label
                  className=" text-black font-semibold"
                  htmlFor="full name"
                >
                  Full name
                </label>
                <input
                  value={profilInfo.name}
                  onChange={(e) => {
                    setProfileInfo({
                      ...profilInfo,
                      name: e.target.value,
                    });
                  }}
                  className="text-black outline-none rounded-[4px] py-2 px-2 dark:bg-transparent bg-transparent border-[1px] border-[#A08C89]"
                  type="text"
                />
              </div>

              <div className={` mt-3 ss:w-[70%] w-full gap-1 flex flex-col`}>
                <label
                  className=" text-black font-semibold"
                  htmlFor="full name"
                >
                  Password
                </label>
                <input
                  value={profilInfo.password}
                  onChange={(e) => {
                    setProfileInfo({
                      ...profilInfo,
                      password: e.target.value,
                    });
                  }}
                  className="text-black outline-none rounded-[4px] py-2 px-2 dark:bg-transparent bg-transparent border-[1px] border-[#A08C89]"
                  type="text"
                />
              </div>
              <div className={` mt-3 ss:w-[70%] w-full gap-1 flex flex-col`}>
                <label
                  className=" text-black font-semibold"
                  htmlFor="full name"
                >
                  Adresse
                </label>
                <div className=" flex flex-row flex-wrap gap-2 justify-between items-center">
                  <input
                    value={profilInfo?.address?.ville}
                    onChange={(e) => {
                      setProfileInfo({
                        ...profilInfo,
                        address:{
                          street:profilInfo?.address?.street,
                          ville: e.target.value,
                          wilaya: profilInfo?.address?.wilaya,
                        }
                      })
                    }}
                    className="text-black outline-none rounded-[4px] py-2 px-2 dark:bg-transparent bg-transparent border-[1px] border-[#A08C89]"
                    type="text"
                  />
                  <input
                    value={profilInfo?.address?.wilaya}
                    onChange={(e) => {
                      setProfileInfo({
                        ...profilInfo,
                        address:{
                          street:profilInfo?.address?.street,
                          ville: profilInfo?.address?.ville,
                          wilaya:e.target.value 
                        }
                      })
                    }}
                    className="text-black outline-none rounded-[4px] py-2 px-2 dark:bg-transparent bg-transparent border-[1px] border-[#A08C89]"
                    type="text"
                  />
                  <input
                     value={profilInfo?.address?.street}
                     onChange={(e) => {
                       setProfileInfo({
                         ...profilInfo,
                         address:{
                           street:e.target.value,
                           ville: profilInfo?.address?.ville,
                           wilaya:profilInfo?.address?.wilaya
                         }
                       })
                     }}
                    className="text-black outline-none rounded-[4px] py-2 px-2 dark:bg-transparent bg-transparent border-[1px] border-[#A08C89]"
                    type="text"
                  />
                </div>
              </div>

              <div className=" ss:w-[70%] w-full mt-3 flex flex-col gap-1">
                <label className="text-black font-semibold" htmlFor="">
                  Phone Number
                </label>
                <div className=" rounded-[4px] border-[1px] border-[#A08C89] flex flex-row w-full">
                  <input
                    className="text-black w-full dark:bg-transparent outline-none rounded-r-[4px] py-2 px-2 bg-transparent"
                    type="text"
                    value={profilInfo.numberPhone}
                    onChange={(e) => {
                      setProfileInfo({
                        ...profilInfo,
                        numberPhone: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="w-full flex ss:flex-row flex-col ss:gap-0 gap-3 justify-between ss:items-end items-center">
                <div className={` mt-3 ss:w-[70%] w-full gap-1 flex flex-col`}>
                  <label className="text-black font-semibold" htmlFor="email">
                    Email
                  </label>
                  <input
                    value={profilInfo.email}
                    className="text-black disabled:bg-slate-200 bg-transparent outline-none rounded-[4px] py-2 px-2 border-[1px] border-[#A08C89]"
                    type="text"
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" flex ss:justify-start justify-center  items-center mt-10 w-[70%]">
            <button
              onClick={() => {
                globalFunc();
              }}
              className="ss:w-[30%] w-[80%] bg-green-400 h-8 flex justify-center items-center  font-semibold text-white rounded-[4px]"
            >
              {loading ? <Loader /> : "Edit Profile"}
            </button>
          </div>
        </div>
        <div className=" w-full px-8 h-[30%] flex ss:flex-row flex-row-reverse justify-between items-center">
          <div className=" w-[40%] flex justify-center items-center">
            <p
              onClick={() => {
                logoutUser();
              }}
              className="text-black hover:text-green-500 text-[30px] gap-2 flex justify-center items-center  hover:cursor-pointer"
            >
              <BiLogOutCircle />
              <span className=" text-[20px] underline-offset-1">Logout</span>
            </p>
          </div>

          <div className=" flex flex-col gap-1">
            <p
              onClick={() => navigate("/terms&condition")}
              className=" hover:text-green-500  text-black hover:cursor-pointer hover:underline  hover:underline-offset-1"
            >
              Terms and Conditions
            </p>
            <p
              onClick={() => navigate("/privacy policy")}
              className=" hover:text-green-500 text-black hover:cursor-pointer hover:underline hover:underline-offset-1"
            >
              Privacy Policy
            </p>
            <p
              onClick={() => navigate("/shipping policy")}
              className=" hover:text-green-500 text-black hover:cursor-pointer hover:underline hover:underline-offset-1"
            >
              Shipping Policy
            </p>
            <p
              onClick={() => navigate("/refunds")}
              className=" hover:text-green-500 text-black hover:cursor-pointer hover:underline hover:underline-offset-1"
            >
              Refunds/Cancellation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
