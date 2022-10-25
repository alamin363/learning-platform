import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
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