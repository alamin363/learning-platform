import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../context/Context';

const Navber = () => {
  const {user} = useContext(authContext);
  console.log(user);
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/blog'>Blog</Link>
      <Link to='/course'>Course</Link>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Register</Link>
    </div>
  );
};

export default Navber;