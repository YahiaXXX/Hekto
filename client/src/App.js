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

function App() {
  return (
    <div className=" relative" >
      <div>
      { true && <Navbar/> }
      </div>

      
       
            <Routes>
                <Route element={<PrivateRoute />}>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/cart" element={<Cart />} />
                  <Route exact path="/product" element={<Product />} />
                  <Route exact path="/vintage" element={<VintagePost />} />
                  <Route exact path="/payment" element={<Payment />} />
                  <Route exact path="/order completed" element={<OrderCompleted />} />
                  <Route exact path="/stores" element={<StoresList />} />
                  <Route exact path="/products" element={<ProductsList />} />
                  <Route exact path="/reclamation" element={<Reclamation />} />
                  <Route exact path="/about" element={<About />} />
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
