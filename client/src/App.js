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
                  <Route exact path="/reclamation" element={<Reclamation />} />
                </Route>

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
      </Routes> 
   
       

      <div>
      { true && <Footer/> }
      </div>
    </div>
  );
}

export default App;
