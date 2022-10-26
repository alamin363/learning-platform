import React, { useContext } from 'react';
import { authContext } from '../../context/Context';

const PrivetRout = ({children}) => {
  const {user} = useContext(authContext);
  console.log(user)
  return (
    <div>
      
    </div>
  );
};

export default PrivetRout;