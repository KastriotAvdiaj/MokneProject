import React, { useEffect, useRef, useState } from "react";
import { useScroll, useSpring, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Mokne3 from "../../assets/final7-vmake.mp4";
import mokneImage from "../../assets/bootleMokne.jpg";
import bottle from "../../assets/bottleMokne.png";
import Burimi from "../../assets/burimiIstogut.jpg";
import "./Home.css";
import { MultilayerParallax } from "../../Components/Parallax/MultilayerParallax";

const waveAnimation = {
  initial: { y: 0, x: 0 },
  animate: {
    x: [0, -10, 10, 0],
    y: [0, -10, 10, 0],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="video-container">
        <video autoPlay muted loop className="background-video">
          <source src={Mokne3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="on-top-div"></div>
          <MultilayerParallax />
        <div className="third-content">
          {/* <img src={bottle} className="mokne-bottle-image" /> */}
        </div>
      </div>
    </>
  );
};

export default Home;
