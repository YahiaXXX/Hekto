import React,{useEffect,createContext,useContext,useState} from "react";



const StateContext = createContext();


export const ContextProvider = ({children})=>{
    const [activeMenu,setActiveMenu] = useState(false);
    const [pageName,setPageName]=useState("Dashboard")
   
    
   
  
    

   
    const [screenSize,setScreenSize] = useState(undefined)

    return (<StateContext.Provider 
    value={{
        activeMenu,
        setActiveMenu,
        screenSize,
        setScreenSize,
        pageName,
        setPageName
        }} >
        {children}

    </StateContext.Provider>)
}

export const useStateContext = () => useContext(StateContext);