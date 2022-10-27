import React from "react";
import { FaArrowRight, FaGofore, FaRegCompass } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="serves">
        <h2 className="title-foter">
          <FaRegCompass /> Top companies choose Programer to build in-demand
          career skills.
        </h2>
        <div className="footer-container">
          <div className="list-1">
            <Link to={`https://web.facebook.com/alaminislam365/`}>
              About us <FaArrowRight />
            </Link>
            <Link>
              Get the app <FaArrowRight />
            </Link>
            <Link>
              Countact us <FaArrowRight />
            </Link>
            <Link>
              Careers <FaArrowRight />
            </Link>
          </div>
          <div className="list-2">
            <Link>
              Blog <FaArrowRight />
            </Link>
            <Link>
              Help <FaArrowRight />
            </Link>
            <Link>
              Help And Support <FaArrowRight />
            </Link>
            <Link>
              Investors <FaArrowRight />
            </Link>
            <Link>
              Terms <FaArrowRight />
            </Link>
          </div>
          <div className="list-3">
            <Link>
              Privacy Policy <FaArrowRight />
            </Link>
            <Link>
              Cookie Settings <FaArrowRight />
            </Link>
          </div>

          <h1>We Are a Programer </h1>
        </div>
      </div>
      <div className="list-4">
        <h1>Programer</h1>
        <p>©2022 Programer, Inc.</p>
      </div>
    </div>
  );
};

export default Footer;
