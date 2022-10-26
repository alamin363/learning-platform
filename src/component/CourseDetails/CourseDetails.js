import React from "react";
import { FaFileWord, FaHome, FaStar, FaStarHalf, FaWordpress } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import "./CourseDetails.css";
const CourseDetails = () => {
  const data = useLoaderData();
  const { detels, title, Instructor, learn, price, auth, rating } = data;
  console.log(data);
  return (
    <div className="details">
      <div className="auth-body">
       <div>
       <img className="auth-images" src={auth} alt="" />
       </div>
        <div className="details-auth">
          <h3 className="titel">{title}</h3>
          <h4>{detels}</h4>
          <h5><small>Bestseller</small>{rating} <FaStar /> Ratings</h5>
          <p className="underline"></p>
          <h1><FaFileWord /> Bangla, English, Hindi</h1>
          <h2 className="city"><FaHome />  Bangladesh/Dhaka </h2>
          <h1>Price: ${price}</h1>
         <div className="btn-addToCart">
         <Link>Add to Cart</Link>
          
         </div>
         <div>
          <h4>60-Day Money-Back Guarantee</h4>
         <p>Full Lifetime Access</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
