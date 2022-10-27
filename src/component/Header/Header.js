import React from 'react';
import './Header.css'
import Book from '../../Utility/coder.jpg'
const Header = () => {
  return (
      <div className='container'>
       {/* <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPYTZlc0oTmUmhbfhitREOpB0npameCO6MHA&usqp=CAU`} alt="" /> */}
       <img src={Book} alt="" />
      </div>

  );
};

export default Header;