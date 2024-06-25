import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Authorised =({user,children})=> {
    if(!user){
         return <Navigate to="/"/>
    }
    return children
 
}

export default Authorised