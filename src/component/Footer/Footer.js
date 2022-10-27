import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <Link>About us</Link>
        <Link>Get the app</Link>
        <Link>Countact us</Link>
        <Link>Careers</Link>
        <Link>Blog</Link>
        <Link>Help</Link>
        <Link>Help And Support</Link>
        <Link>Investors</Link>
        <Link>Terms</Link>
        <Link>Privacy Policy</Link>
        <Link>Cookie Settings</Link>

        <h1>We Are a Programer 🧟</h1>
      </div>
    </div>
  );
};

export default Footer;