import React from "react";
import './AboutUs.css';
import Montains from "../../assets/natyre water.jpg";
import Bottle from "../../assets/bottle.jpg";

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
      </div>
      <div className="bottle-container">
        <img src={Bottle} alt="Bottle" className="bottle-image" />
      </div>
    </div>
  );
};
