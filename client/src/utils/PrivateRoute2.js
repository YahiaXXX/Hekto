import { Route, Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../contexts/AuthContext'


export default function PrivateRoute2(){
 
    let {authTokens} = useContext(AuthContext);
    return (
        authTokens ? <Navigate to="/" />    : <Outlet/> 
    )
   
}

