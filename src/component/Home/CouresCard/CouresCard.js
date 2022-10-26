import React from "react";
import "./CouresCard.css";
const CouresCard = ({ data }) => {
  const { id,ImgUrl, title, Instructor, detels, learn, rating, price, auth } = data;
  console.log(data);
  console.log(auth, id);
  return (
    <div className="fullpage">
      <div className="cart-body">
        <img className="course-img" src={ImgUrl ? ImgUrl : "Not Avlbl"} alt="" />
        <div>
          <h4>{title ? title.slice(0, 100) : "Not Avle"}</h4>
        </div>
      </div>
    </div>
  );
};

export default CouresCard;
