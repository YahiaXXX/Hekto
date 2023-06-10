import { createContext,useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CartContext = createContext();

export default CartContext;

export const CartProvider = ({ children }) => {
    const [cartContent,setCartContent]=useState(
      ()=>
        localStorage.getItem('cart')
        ?  JSON.parse(localStorage.getItem('cart')) 
        : []
    )
    const [favourites,setFavourites]=useState(
      ()=>localStorage.getItem('fav') 
      ? JSON.parse(localStorage.getItem('fav'))   
      : []
  )
  const [showOrders,setShowOrders]=useState(false)
    const [subtotal,setSubtotal]=useState(0)
    const calculateSubtotal=()=>{
        let total=0;
        cartContent.map(item=> total = total+item.qte*item.price)
        setSubtotal(total)
    }
    useEffect(()=>{
     calculateSubtotal()
    },[cartContent])

    useEffect(()=>{
     localStorage.setItem('cart', JSON.stringify(cartContent))
    },[cartContent])

    useEffect(()=>{
      localStorage.setItem('fav', JSON.stringify(favourites))
    },[favourites])
  
  const history = useNavigate();

  

  let contextData = {
    cartContent:cartContent,
    setCartContent:setCartContent,
    subtotal:subtotal,
    favourites:favourites,
    setFavourites:setFavourites,
    showOrders:showOrders,
    setShowOrders:setShowOrders
    
  };
  return (
    <CartContext.Provider value={contextData}>
      {children}
    </CartContext.Provider>
  );
};
