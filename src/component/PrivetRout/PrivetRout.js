import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../context/Context';

const PrivetRout = ({children}) => {
  const location = useLocation()
  const {user, loader} = useContext(authContext);
  
  if(loader){
    return <h1>loading....</h1>
  }
  console.log(user)
  if (!user?.uid) {
    return <Navigate to='/login' state={{from: location}} replace ></Navigate>
  }
  return children;
};

export default PrivetRout;