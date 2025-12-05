import React from "react";
import { Link } from "react-router-dom";
import "./common_button.css";

const Common_button = ({ name, link, onClick }) => {
  return (
    <div className="commonbtndiv">
      {link ? (
        <Link to={link} className="common-btn">
          <span>{name}</span>
        </Link>
      ) : (
        <button onClick={onClick} type="button" className="common-btn">
          <span>{name}</span>
        </button>
      )}
    </div>
  );
};

export default Common_button;
