import React from "react";
import './AboutUs.css';
import Montains from "../../assets/natyre water.jpg";

export const AboutUs = () => {
  return (
    <div 
      className="about-us" 
      style={{ backgroundImage: `url(${Montains})` }}
    >
      <div className="about-us-content">
        <h1>Rreth MOKNE</h1>
        <p>Kompania Mokne shpk është kompani e re prodhuese e cila aktivitet primar e ka ujin natyral të amballazhuar.</p>
        <p>Ne besojmë në njohjen dhe shpërblimin e punonjësve të jashtëzakonshëm, dhe ofrojmë mundësi për rritje dhe avancim brenda kompanisë sonë.</p>
        <h2>Punë në dispozicion</h2>
        <p>Punë të postuara nga MOKNE</p>
        <p>Nuk ka punë të disponueshme.</p>
      </div>
      
      <div className="contact-box">
        <p>Email: info@mokne.com</p>
        <p>Phone: +383 48 505 858</p>
      </div>
    </div>
  );
};
