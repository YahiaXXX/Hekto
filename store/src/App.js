import NavbarAdmin from "./components/NavbarAdmin";
import { useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import {Routes,Route, useActionData} from "react-router-dom"
import PrivateRoute from "./utils/PrivateRoute";
import Sidebar from "./components/Sidebar"
import ProductList from "./pages/ProductList";
import AddProduct from "./pages/AddProduct";
import Customers from "./pages/Customers";
import Orders from "./pages/Orders";
import Complaints from "./pages/Complaints";
import Login from "./pages/Login";
import InfosSeller from "./pages/InfosSeller";
import { useContext } from "react";
import AuthContext from "./contexts/AuthContext";
import PrivateRoute2 from "./utils/PrivateRoute2";
import { useStateContext } from "./contexts/ContextProvider";
import NavbarMobile from "./components/NavbarMobile";
import Settings from "./pages/Settings";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const {authTokens,status} = useContext(AuthContext)
  const {screenSize,setScreenSize,setActiveMenu,activeMenu}=useStateContext()
  useEffect(()=>{
    const handleResize = ()=> setScreenSize(window.innerWidth)
    window.addEventListener('resize',handleResize)
    
    handleResize();
    return ()=>window.removeEventListener('resize',handleResize)
    },[])

    useEffect(()=>{
      if(screenSize <= 1140 ){setActiveMenu(false)}
      else{setActiveMenu(true)}
      },[screenSize])  
  return (
    <div className=" relative h-screen " >
      <ToastContainer />

       { authTokens && <NavbarMobile/> }
       { authTokens && activeMenu ? (
            <div className={`w-72 sidebar fixed bg-white`}>
              <Sidebar />
            </div>
          ) : (
            ""
          )}      
    <div className={`${authTokens ? "h-[10%]" :"" }`} >
    { authTokens && <NavbarAdmin/> }
    </div>

    <div className={` ${ authTokens && activeMenu ? "ml-72" :"" } bg-slate-50 ${ authTokens ? "h-[90%]"  : "h-screen" }`}  >
    { !status && authTokens && <div className="fixed left-0 top-0 w-[100%] h-screen bg-black bg-opacity-60 backdrop-blur-sm z-[9999] flex justify-center items-center  " >
                <InfosSeller/>
              </div>
               
                }
    <Routes>
              <Route element={<PrivateRoute />}>
                <Route exact path="/" element={<Dashboard />} />
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route exact path="/product" element={<ProductList />} />
                <Route exact path="/product/add" element={<AddProduct />} />
                <Route exact path="/customers" element={<Customers />} />
                <Route exact path="/orders" element={<Orders />} />
                <Route exact path="/customer complaint" element={<Complaints />} />
                <Route exact path="/settings" element={<Settings />} />
                
              </Route>
              
              <Route element={<PrivateRoute2 />} >
              <Route path="/login" element={<Login />} />
              </Route>
             
              
    </Routes> 
    </div>
     
         
 
  </div>
  );
}

export default App;
