import React from "react";
import "./Login.css";
import { FaGoogle, FaGithub, FaLock, FaMailBulk, FaForward } from "react-icons/fa";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../context/Context";
import { useState } from "react";
const Login = () => {
  const[error, setError] = useState(null)
  const { sineinWithEmailPass, SigninWithGoogle, sineOut, loginWithGithub } =
    useContext(authContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handelSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    sineinWithEmailPass(email, password)
      .then((userCrate) => {
        const user = userCrate.user;
        // console.log(user);
        //
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errors = error.message;
        setError(errors)
      });
  };
  // const handelLogOut = () =>{
  //   sineOut()
  //   .then(()=>{})
  //   .catch(error => {})
  // }
  const handelGoogleSignIn = () => {
    SigninWithGoogle()
      .then((result) => {
        const user = result.user;
        // console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
      });
  };
  const handelGithublogin = () => {
    loginWithGithub()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
      });
  };
  return (
    <div>
      <div className="online-login">
        <button onClick={handelGoogleSignIn} className="btn-fblogin">
          <FaGoogle style={{ fontSize: "15px", color: "green" }} />{" "}
          <span className="text">Login With Google</span>
        </button>
        <button onClick={handelGithublogin} className="btn-fblogin">
          <FaGithub style={{ fontSize: "15px", color: "black" }} />{" "}
          <span className="text">Login With GitHub</span>
        </button>
        <form onSubmit={handelSubmit}>
          <div className="input-feld">
            <input name="email" placeholder="Email" type="email" required />
            <span className="email">
              <FaMailBulk style={{ color: "gray" }} />
            </span>
          </div>
          <div className="input-feld">
            <input name="password" placeholder="Password" type="password" />
            <span className="email">
              <FaLock style={{ color: "gray" }} />
            </span>
          </div>
          <button className="btn">Log In</button>
          <br />
          <div>
          <p className="error">{error}</p>
          <p>
            <FaForward /> <Link>Forget Password</Link>
          </p>
          <p>
            Don't have an account? <Link to="/register">Sing Up</Link>
          </p>
        </div>
        </form>
       
      </div>
    </div>
  );
};

export default Login;
