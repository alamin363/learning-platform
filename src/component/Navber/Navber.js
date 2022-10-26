import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { FaCode, FaLightbulb, FaMale, FaRegLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";
import { authContext } from "../../context/Context";
import "./Navber.css";
const Navber = () => {
  const [toggole, setToggole] = useState(true)
  const { user, sineOut } = useContext(authContext);
  const handelLogOut = () => {
    sineOut()
      .then(() => {})
      .catch((error) => {});
  };
  return (
    <div className="nav-container">
      <div>
        <Link className="name-web" to="/">
          <FaCode /> Programer
        </Link>
      </div>
      <div className="nave-link">
        <Link to="/blog">Blog</Link>
        <Link to="/course">Course</Link>
        <Link className="btn-register" to="/register">
          Register
        </Link>
        {user?.uid ? (
          <Link onClick={handelLogOut} className="btn-login" to="/login">
            LogOut
          </Link>
        ) : (
          <Link className="btn-login" to="/login">
            Login
          </Link>
        )}
        {user?.photoURL && (
          <span title={user?.displayName}>
            <img className="user-img" src={user?.photoURL} alt="" />
          </span>
        )}

        <Link onClick={() => setToggole(!toggole)}>{toggole ? <FaLightbulb /> : <FaRegLightbulb />}</Link>
      </div>
    </div>
  );
};

export default Navber;
