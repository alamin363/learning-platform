import React from "react";
import "./CouresCard.css";
import { FaStar,FaStarHalf } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../../context/Context";

const CouresCard = ({ data }) => {
  const { id, ImgUrl, title, Instructor,  rating,  auth } =
    data;
  return (
    <div className="fullpage">
      <div className="cart-body">
        <img
          className="course-img"
          src={ImgUrl ? ImgUrl : "Not Avlbl"}
          alt=""
        />
        <div>
          <h4 className="title">{title.length < 100 ? title : title.slice(0, 100) + ".."}</h4>
          <p><small className="auther">{Instructor}</small></p>
          <p className="underLine"></p>
          <h4 className="title rating">Rating: {rating} <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalf /></h4>
          <div><Link to={`/course/${id}`}
           className="btn-course">Show Details</Link></div>
        </div>
      </div>
    </div>
  );
};

export default CouresCard;
