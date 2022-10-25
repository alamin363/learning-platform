import React from 'react';
import { FaLock, FaMailBulk } from 'react-icons/fa';
import './Register.css'
const Register = () => {
  const handelSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;


  }
  return (
    <div>
      <form onSubmit={handelSubmit}>
      <input name="name" placeholder="Full Name" type="text" />
      <input name="email" placeholder="Email" type="email" required/>
      <input name="password" placeholder="Password" type="password" />
      <div className="underline">
      </div>
      <button className="btn">Log In</button>
      </form>
    </div>
  );
};

export default Register;<h1>this is Register form</h1>