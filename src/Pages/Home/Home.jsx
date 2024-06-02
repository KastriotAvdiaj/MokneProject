import React from "react";
import { useScroll, useSpring, motion } from "framer-motion";
import Mokne3 from "../../assets/final7-vmake.mp4";
import "./Home.css";
import mokneLogo from "../../assets/mokneLogoWider.jpg";
import { FadeIn } from "../../Components/Reveal/FadeIn";
import { Reveal } from "../../Components/Reveal/Reveal";
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
        <div className="mid-section-wrapper">
          <img src={mokneLogo} alt="" className="mokne-logo" />
          <FadeIn>
            <h1 className="mokneLogo-h1">
              Etiketa jonë e shishës është e inspiruar nga mrekullia e bjeshkëve
              Mokne
            </h1>
          </FadeIn>
        </div>
        <MultilayerParallax />
        <div className="third-content">
          {/* <img src={bottle} className="mokne-bottle-image" /> */}
        </div>
      </div>
    </>
  );
};

export default Home;
