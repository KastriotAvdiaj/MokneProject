import React from "react";
import { useScroll, useSpring, motion } from "framer-motion";
import Mokne3 from "../../assets/final7-vmake.mp4";
import "./Home.css";
import burimiVideo from "../../assets/burimi2.mp4";
import mokneLogo from "../../assets/fullLogo.jpg";
import burimiPhoto from "../../assets/burimiPhoto.jpg";
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
          <div className="h1-wrapper">
            <img src={burimiPhoto} alt="" className="background-blur-image" />
            <Reveal>
              <h1 className="home-h1">Ujë nga Bjeshkët e Istogut</h1>
            </Reveal>
          </div>
          <div className="mokneLogo-wrapper">
            <h1 className="mokneLogo-h1">
              <section style={{ margin: "0 0 0 1.2rem", padding: "0 0 0 0" }}>
                Inspiruar nga
              </section>
              Bjeshkët Mokne
            </h1>
            <img src={mokneLogo} alt="" className="mokne-logo" />
          </div>
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
