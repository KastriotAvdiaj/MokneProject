
import React from 'react';
import './Footer.css';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
    const instagramUrl = 'https://www.instagram.com/ujemokne/';
    const facebookUrl = 'https://www.facebook.com/profile.php?id=61557567953240';
  return (
    <footer className="footer">
      <p>© 2024 Mokne Company. All rights reserved.</p>
      <div className='socialMedia'>
      <p>Na ndiqni ne :</p>
      <p>
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
            <FaInstagramSquare />
          </a>
          </p>
      <p>
      <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare />
          </a>
      </p>
      </div>
    </footer>
  );
};

export default Footer;
