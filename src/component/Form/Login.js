import React from "react";
import "./Login.css";
import { FaGoogle, FaGithub, FaLock, FaMailBulk } from "react-icons/fa";
import { Link } from "react-router-dom";
const Login = () => {

  const handelSubmit = event =>{
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
  }
  return (
    <div>
     <div className="online-login">
     <button className="btn-fblogin">
        <FaGoogle style={{fontSize:"15px", color:"green"}}/> <span className="text">Login With Google</span>
      </button>
      <button className="btn-fblogin">
        <FaGithub style={{fontSize:"15px", color:"black"}}/> <span className="text">Login With Google</span>
      </button>
      <form onSubmit={handelSubmit}>
      <div className="input-feld">
      <input name="email" placeholder="Email" type="email" required/>
      <span className="email"><FaMailBulk style={{color:"gray"}}/></span>
      </div>
      <div className="input-feld">
      <input name="password" placeholder="Password" type="password" />
      <span className="email"><FaLock style={{color:"gray"}}/></span>
      </div>
      <button className="btn">Log In</button>
      </form>
      <p>or <Link>Forget Password</Link></p>
      <p>Don't have an account? <Link to="/register">Sing Up</Link></p>
     </div>
    </div>
  );
};

export default Login;
