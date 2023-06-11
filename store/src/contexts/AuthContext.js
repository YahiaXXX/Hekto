import { createContext,useContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import axios from "axios";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const baseUrl ="http://localhost:8010/v1/api/shop/"
  // const baseUrl = process.env.REACT_APP_AUTH_BASE_URL
  const [status,setStatus]=useState(true)
  const [bool,setBool]=useState(false) 
  let [authTokens, setAuthTokens] = useState(() =>
     Cookies.get('token')
      ? Cookies.get('token')
      : null
  );
  let [loading, setLoading] = useState(false);
  const history = useNavigate();

  let logoutUser = () => {
    setAuthTokens(null);
    // setUser(null);
    Cookies.remove('token');
    history("/login");
  };

  const checkStatus= async ()=>{ 
    console.log("hellooo")
    try{
      let res  = await axios.get(`${baseUrl}getstatus`,{withCredentials: true})
      setStatus(res.data)
      console.log(res.data)

    }
    catch(e){

    }
  }

  useEffect(()=>{
   checkStatus()
  },[bool])

//   let updateToken = async () => {
//     try{
//     let res = await axios.post(urlRefresh, { refresh: authTokens?.refresh });
//     let data = res.data;
//     data = { ...data, refresh: authTokens.refresh };
//     setAuthTokens(data);
//     setUser(jwt_decode(data.access));
//     localStorage.setItem("authTokens", JSON.stringify(data));

//     }
//     catch(e){
//       console.log(e.response)
//       logoutUser()
//     }
//   };

  let contextData = {
    // user: user,
    authTokens: authTokens,
    logoutUser: logoutUser,
    baseUrl:baseUrl,
    // setUser: setUser,
    setAuthTokens:setAuthTokens,
    status:status,
    setStatus:setStatus,
    bool:bool,
    setBool:setBool
  };

//   useEffect(() => {

//     let hour = 1000 * 60 * 60 ;
//     let interval = setInterval(() => {
//       if (authTokens) {
//         updateToken();
//       }
//     }, hour);
//     return () => clearInterval(interval);
//   }, [authTokens]);
  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
};
