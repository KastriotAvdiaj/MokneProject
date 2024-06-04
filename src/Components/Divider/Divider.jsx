import React from "react";
import "./Divider.css";


const Divider = ({ color }) => {
  return (
    <>
      <div className="divider" style={{ backgroundColor: color }}></div>
    </>
  );
};

export default Divider;
