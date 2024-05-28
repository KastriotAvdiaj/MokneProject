import React from "react";
import Mokne3 from "../../assets/final7-vmake.mp4";
import "./Home.css";
import mokneImage from "../../assets/bootleMokne.jpg";

const Home = () => {
  return (
    <div className="video-container">

      <video autoPlay muted loop className="background-video">
        <source src={Mokne3} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="on-top-div">
        <div className="mokne-paragraph">
          <p className="mokne-paragraph2">MOKNE</p>
        </div>
      </div>

      <div className="image-container">
        <img src={mokneImage} alt="Mokne Bottle" className="mokne-image" />
      </div>
    </div>
  );
};

export default Home;
