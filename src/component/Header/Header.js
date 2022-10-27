import React from "react";
import "./Header.css";
import {
  FaFileDownload,
  FaHighlighter,
  FaHips,
  FaNetworkWired,
  FaRunning,
  FaSnowman,
} from "react-icons/fa";
import Book from "../../Utility/download.jpg";
import { useContext } from "react";
import { authContext } from "../../context/Context";
const Header = () => {
  const { user } = useContext(authContext);
  console.log(user);
  return (
    <div className="container">
    <div className="img-user">
      <img src={Book} alt="" />
    </div>
      <div className="titel">
      <h2>
        Welcome Dev <FaHighlighter />{" "}
        {user?.uid ? user.displayName : <FaSnowman />}
      </h2>
      <h3>Learn And Destruction Your Secret </h3>
      <h4>Goooooooooooooooo ... <FaRunning /></h4>
      <h3>
        This Is The Time To Learn <FaNetworkWired />
      </h3>
      </div>
    </div>
  );
};

export default Header;
