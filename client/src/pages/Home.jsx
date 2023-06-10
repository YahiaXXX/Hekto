import React, { useContext, useEffect, useState } from "react";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import LatestProducts from "../components/LatestProducts";
import Services from "../components/Services";
import UniqueFeatures from "../components/UniqueFeatures";
import Discount from "../components/Discount";
import TopCategories from "../components/TopCategories";
import Banner from "../components/Banner";
import LatestBlog from "../components/LatestBlog";
import axios from "axios";
import OrdersPopup from "../components/OrdersPopup";
import CartContext from "../contexts/CartContext";

function Home() {
  const msQueryAdmin = process.env.REACT_APP_QUERY_ADMIN_BASE_URL;
  const urlGetSellers = `http://localhost:8010/v1/api/shop/getAllShops`;
  const urlGetProducts = `http://localhost:8071/products/getAllProducts`;
  const urlGetSubs="http://localhost:8010/v1/api/user/getMySubscription"
  const urlGetCategories = `${msQueryAdmin}categories/getAll`;
  const [products, setProducts] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [subs,setSubs]=useState([])
  const [categories, setCategories] = useState([]);
  const {showOrders} = useContext(CartContext)
  

  const getSubs = async ()=>{
      try{
        let res = await axios.get(urlGetSubs,{withCredentials:true})
        setSubs(res.data)

      }
      catch(e){

      }
  }


  const getProducts = async () => {
    try {
      let res = await axios.get(urlGetProducts, { withCredentials: true });
   
      setProducts(res.data)
    } catch (e) {}
  };
  const getSellers = async () => {
    try {
      let res = await axios.get(urlGetSellers, { withCredentials: true });
      setSellers(res.data)
      console.log(res);
     
    } catch (e) {}
  };
  const getCategories = async () => {
    try {
      let res = await axios.get(urlGetCategories, { withCredentials: true });
      setCategories(res.data)
    } catch (e) {}
  };

  useEffect(()=>{
    getCategories()
    getSellers()
    getProducts()
    getSubs()
  },[])

  return (
    <> 
      <div className="">
        <Hero />
      </div>
      <div className="">
        <Featured subs={subs} products={products} sellers={sellers} />
      </div>
      <div>
        <LatestProducts products={products} />
      </div>
      <div>
        <Services />
      </div>
      {/* <div>
        <UniqueFeatures />
      </div> */}
      <div>
        <Discount />
      </div>
      <div>
        <TopCategories categories={categories} />
      </div>
      {/* <div>
    <Banner/>
   </div> */}
      {/* <div>
        <LatestBlog />
      </div> */}
    </>
  );
}

export default Home;
