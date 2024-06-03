import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import waterLogo3 from "../../assets/iconLogo.png";

export const Header = () => {
  return (
    <div className="main-header-container">
      <section className="logo-and-name-section">
        <img src={waterLogo3} alt="" height="70px" className="logo-image" />
        Ujë Mokne
      </section>
      <ul className="header-ul">
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/about-us">
          <li>About Us</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};
