import { createContext,useContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  let [authTokens, setAuthTokens] = useState(() =>
     Cookies.get('token')
      ? Cookies.get('token')
      : null
  );
  // let [user, setUser] = useState(() =>
  // Cookies.get('token')
  //     ? jwt_decode(Cookies.get('token'))
  //     : null
  // );
  let [loading, setLoading] = useState(false);
  const history = useNavigate();

  let logoutUser = () => {
    setAuthTokens(null);
    // setUser(null);
    Cookies.remove('token');
    history("/login");
  };

  let contextData = {
    // user: user,
    authTokens: authTokens,
    logoutUser: logoutUser,
    // setUser: setUser,
    setAuthTokens:setAuthTokens
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

useEffect(()=>{
console.log(Cookies.get('token'))
// console.log(user)
console.log(authTokens)

},[])
  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
};
