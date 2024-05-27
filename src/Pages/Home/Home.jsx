import React from "react";
import Video from "../../assets/19368-301525727_medium.mp4"; // download worse quality version
import Mokne2 from "../../assets/final7.mp4";
import "./Home.css";
import { Header } from "../../Components/Header/Header";

const Home = () => {
  return (
    <>
      <div className="video-container">
        <video autoPlay muted loop className="background-video">
          <source src={Mokne2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
          {/* <div className="mokne-paragraph">
            <p>MOKNE</p>
          </div> */}
      </div>
    </>
  );
};

export default Home;
