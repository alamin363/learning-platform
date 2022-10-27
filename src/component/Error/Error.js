import React from 'react';
import { FaFileUpload } from 'react-icons/fa';
import './Error.css'
const Error = () => {
  return (
    <div className='error-container'>
      <div className='title'>
        <h1> 404 ....</h1>
        <br />
         <h3>plz Reload Now <FaFileUpload /></h3>
      </div>
    </div>
  );
};

export default Error;