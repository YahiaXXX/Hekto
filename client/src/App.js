import {Routes,Route} from "react-router-dom"
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import PrivateRoute from "./utils/PrivateRoute";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import VintagePost from "./pages/VintagePost";
import Payment from "./pages/Payment";
import OrderCompleted from "./pages/OrderCompleted";
import StoresList from "./pages/StoresList";
import Reclamation from "./pages/Reclamation";
import PrivateRoute2 from "./utils/PrivateRoute2";
import ProductsList from "./pages/ProductsList";
import About from "./pages/About";
import PostsList from "./pages/PostsList";

import Favourites from "./pages/Favourites";
import Store from "./pages/Store";
import { useContext } from "react";
import CartContext from "./contexts/CartContext";
import OrdersPopup from "./components/OrdersPopup";
import Post from "./pages/Post";
import AuthContext from "./contexts/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const {authTokens} = useContext(AuthContext)
  const {showOrders} = useContext(CartContext)
  return (
    <div className=" relative" >
      <ToastContainer />
      <div>
      { true && <Navbar/> }
      </div>
      { showOrders && authTokens && <div className="fixed left-0 top-0 w-[100%] h-screen bg-black bg-opacity-20 z-[9999] flex justify-center items-center  " >
    < OrdersPopup/>
  </div>
   
    }

      
       
            <Routes>
                <Route element={<PrivateRoute />}>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/cart" element={<Cart />} />
                  <Route exact path="/product/:id" element={<Product />} />
                  <Route exact path="/post/:id" element={<Post/>} />
                  <Route exact path="/shop/:id" element={<Store/>} />
                  <Route exact path="/vintage" element={<VintagePost />} />
                  <Route exact path="/payment" element={<Payment />} />
                  <Route exact path="/order completed" element={<OrderCompleted />} />
                  <Route exact path="/stores" element={<StoresList />} />
                  <Route exact path="/products" element={<ProductsList />} />
                  <Route exact path="/reclamation" element={<Reclamation />} />
                  <Route exact path="/about" element={<About />} />
                  <Route exact path="/favourites" element={<Favourites />} />
                  <Route exact path="/posts" element={<PostsList />} />

                </Route>
               <Route element={<PrivateRoute2 />}>
               <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

               </Route>
                
      </Routes> 
   
       

      <div>
      { true && <Footer/> }
      </div>
    </div>
  );
}

export default App;
