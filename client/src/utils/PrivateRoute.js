import { Route, Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../contexts/AuthContext'


export default function PrivateRoute(){
 
    let {authTokens} = useContext(AuthContext);
    return (
        false ? <Navigate to="/login" />    : <Outlet/> 
    )
   
}

