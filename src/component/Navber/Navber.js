import React from "react";
import { useContext } from "react";
import { FaCode, FaMale } from "react-icons/fa";
import { Link } from "react-router-dom";
import { authContext } from "../../context/Context";
import "./Navber.css";
const Navber = () => {
  const { user, sineOut } = useContext(authContext);
  const handelLogOut = () => {
    sineOut()
      .then(() => {})
      .catch((error) => {});
  };
  console.log(user);
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
        {user?.photoURL && <span title={user?.displayName
}><img className="user-img" src={user?.photoURL} alt="" /></span>}
      </div>
      
    </div>
  );
};

export default Navber;
