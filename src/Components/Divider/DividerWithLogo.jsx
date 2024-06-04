import React from "react";
import "./Divider.css";
import mokneLogo2 from "../../assets/mokneLogo2.png";
import Divider from "./Divider";
import { FadeIn } from "../Reveal/FadeIn";

const DividerWithLogo = ({ color }) => {
  return (
    <>
      <div className="divider-with-logo">
        <Divider />
        <img src={mokneLogo2} style={{ height: "130px" }} alt="Logo" />
        <Divider />
      </div>
    </>
  );
};

export default DividerWithLogo;
