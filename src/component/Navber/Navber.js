import React from 'react';
import { useContext } from 'react';
import { FaCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { authContext } from '../../context/Context';
import './Navber.css'
const Navber = () => {
  const {user,sineOut} = useContext(authContext);
    const handelLogOut = () =>{
    sineOut()
    .then(()=>{})
    .catch(error => {})
  }
  return (
    <div className='nav-container'>
    <div>

      <Link className='name-web' to='/'><FaCode /> Programer</Link>
    </div>
      <div className='nave-link'>
      <Link to='/blog'>Blog</Link>
      <Link to='/course'>Course</Link>
      {user?.uid ? <Link onClick={handelLogOut} className='btn-login' to='/login'>LogOut</Link> : <Link className='btn-login' to='/login'>Login</Link>}
      <Link className='btn-register' to='/register'>Register</Link>
      </div>
    </div>
  );
};

export default Navber;