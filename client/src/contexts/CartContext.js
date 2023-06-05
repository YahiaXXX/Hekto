import { createContext,useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CartContext = createContext();

export default CartContext;

export const CartProvider = ({ children }) => {
    const [cartContent,setCartContent]=useState([
        {
            id:13253,
            name:"name2",
            price:120,
            qte:3,
            url:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80"
        },
    ])
    const [subtotal,setSubtotal]=useState(0)
    const calculateSubtotal=()=>{
        let total=0;
        cartContent.map(item=> total = total+item.qte*item.price)
        setSubtotal(total)
    }
    useEffect(()=>{
     calculateSubtotal()
    },[cartContent])
  
  const history = useNavigate();

  

  let contextData = {
    cartContent:cartContent,
    setCartContent:setCartContent,
    subtotal:subtotal
    
  };
  return (
    <CartContext.Provider value={contextData}>
      {children}
    </CartContext.Provider>
  );
};
