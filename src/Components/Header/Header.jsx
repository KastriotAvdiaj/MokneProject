import React from "react";
import "./Header.css";
import { NavLink, useLocation } from "react-router-dom";
import waterLogo3 from "../../assets/iconLogo.png";

export const Header = () => {
  const location = useLocation();

  return (
    <div className="main-header-container">
      <section className="logo-and-name-section">
        <img src={waterLogo3} alt="" height="70px" className="logo-image" />
        Ujë Mokne
      </section>
      <ul className="header-ul">
        <NavLink exact to="/">
          <li className={location.pathname === "/" ? "active-link" : ""}>
            Home
          </li>
        </NavLink>
        <NavLink to="/about-us">
          <li
            className={location.pathname === "/about-us" ? "active-link" : ""}
          >
            About Us
          </li>
        </NavLink>
        <NavLink to="/contact">
          <li className={location.pathname === "/contact" ? "active-link" : ""}>
            Contact
          </li>
        </NavLink>
      </ul>
    </div>
  );
};
