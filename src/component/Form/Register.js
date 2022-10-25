import React from 'react';
import { useContext } from 'react';
import { FaLock, FaMailBulk } from 'react-icons/fa';
import { authContext } from '../../context/Context';
import './Register.css'
const Register = () => {
  const {loginWithEmailPass} = useContext(authContext);
  console.log(loginWithEmailPass);
  const handelSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    loginWithEmailPass(email,password)
    .then(result => {
      const user = result.user;
      console.log(user);
      form.reset();
    })
    .catch(error => {
      const errorMessage = error.message;
    })
  }
  return (
    <div>
      <form onSubmit={handelSubmit}>
      <h4>Sign up and start learning</h4>
      <input className='inputs' name="name" placeholder="Full Name" type="text" />
      <input className='inputs' name="email" placeholder="Email" type="email" required/>
      <input className='inputs' name="password" placeholder="Password" type="password" />
      <div className="underline">
      </div>
      <button className="btn-rg">Register Now</button>
      </form>
    </div>
  );
};

export default Register;<h1>this is Register form</h1>