import React from "react";
import "./IndividualImage.css";

export const IndividualImage = ({ image, text }) => {
  return (
    <div className="individual-image-container">
      <div className="image-overlay">
        <div className="image-text">{text}</div>
      </div>
      <img src={image} alt="" />
    </div>
  );
};
