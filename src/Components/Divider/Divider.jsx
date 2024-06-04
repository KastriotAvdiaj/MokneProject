import React from "react";
import "./Divider.css";
import mokneLogo2 from "../../assets/mokneLogo2.png";

const Divider = ({ color }) => {
  return <div className="divider" style={{ backgroundColor: color }}></div>;
};

export default Divider;
