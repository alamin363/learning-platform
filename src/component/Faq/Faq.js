import React from 'react';
import { FaQuestion, FaStar } from 'react-icons/fa';
import './Faq.css'
const Faq = () => {
  return (
    <div className='faq-container'>
     <div>
     <h1 >Summary of this website</h1>
     <h3>1. react app .</h3>
     <h3>2. use firebase authenticate .</h3>
     <h3>3. this web site is Learning website .</h3>
     <h3>4. first time create backend data and server .</h3>
     <h3>5. useContext use proparli .</h3>
     <h3>6. full website not create and use row css </h3>
     <h3>7. hosting firebase . </h3>
     <br /><br />
     <h1><FaQuestion /> rating now</h1>
     <p><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
     </div>
    </div>
  );
};

export default Faq;