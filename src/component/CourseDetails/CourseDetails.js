import React from "react";
import {
  Fa500Px,
  FaFileDownload,
  FaFileWord,
  FaHome,
  FaProjectDiagram,
  FaStar,
  FaTelegramPlane,
  FaWordpress,
} from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";
import "./CourseDetails.css";
const ref = React.createRef();
const CourseDetails = () => {
  const data = useLoaderData();

  const { detels, title, Instructor, learn, price, auth, rating } = data;
  const handelUser = () => {
    alert("cong The Dev");
  };

  return (
    <div ref={ref}>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => (
          <button className="btn-pdf" onClick={toPdf}>
            Download PDF <FaFileDownload />
          </button>
        )}
      </Pdf>
      <div className="details">
        <div className="auth-body">
          <div className="imes-auth">
            <img className="auth-images" src={auth} alt="" />
          </div>
          <div className="details-auth">
            <h1 className="titel">{title.slice(0, 40)}</h1>
            <h4>{detels?.length < 170 ? detels : detels.slice(0, 170)}</h4>
            <h5>
              <small>Bestseller</small>
              {rating} <FaStar /> Ratings
            </h5>
            <p className="underline"></p>
            <h1>
              <FaFileWord /> Bangla, English, Hindi
            </h1>
            <h2 className="city">
              <FaHome /> Bangladesh/Dhaka/{" "}
              <span>
                {" "}
                <FaProjectDiagram />
                {Instructor}
              </span>
            </h2>
            <h1>Price: ${price}</h1>
            <div className="button-register-user">
              <Link className="btn-addToCart" onClick={handelUser}>
                Add to Cart
              </Link>
            </div>
            <div>
              <h4>
                <Fa500Px /> 60-Day Money-Back Guarantee
              </h4>
              <p>
                <Fa500Px /> Full Lifetime Access
              </p>
            </div>
          </div>
        </div>
      </div>
      <main className="course-details-point">
        <h1>What you'll learn</h1>
        <div className="list-items">
          {learn.map((lrn) => (
            <span className="detailse">
              <FaTelegramPlane />
              <p className="learn-list" key={Math.random()}>
                {lrn}
              </p>
            </span>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CourseDetails;
