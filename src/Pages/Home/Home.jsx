import React, { useEffect, useRef, useState } from "react";
import { useScroll, useSpring, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Mokne3 from "../../assets/final7-vmake.mp4";
import mokneImage from "../../assets/bootleMokne.jpg";
import bottle from "../../assets/bottleMokne.png";
import Burimi from "../../assets/burimiIstogut.jpg";
import "./Home.css";

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
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const [visibleParagraphs, setVisibleParagraphs] = useState([false, false, false]);

  const patternBackgroundRef = useRef(null);

  useEffect(() => {
    if (inView) {
      controls.start("visible");

      const timeouts = [
        setTimeout(() => setVisibleParagraphs([true, false, false]), 0),
        setTimeout(() => setVisibleParagraphs([true, true, false]), 700),
        setTimeout(() => setVisibleParagraphs([true, true, true]), 1400),
      ];

      return () => timeouts.forEach(clearTimeout);
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const revealAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const parallaxSpeed = 0.5;
      if (patternBackgroundRef.current) {
        patternBackgroundRef.current.style.backgroundPositionY = `${-scrollPosition * parallaxSpeed}px`;
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="video-container">
        <video autoPlay muted loop className="background-video">
          <source src={Mokne3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="on-top-div"></div>
        <div className="pattern-background" ref={patternBackgroundRef}>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={revealAnimation}
            className="image-container"
          >
            <img src={mokneImage} alt="Mokne Bottle" className="mokne-image" />
            <div className="paragraph-div">
              <div className="paragraph-div2">
                <motion.p
                  style={{ margin: 0, padding: 0 }}
                  initial="initial"
                  animate="animate"
                  variants={waveAnimation}
                >
                  Shijojeni ujin
                </motion.p>
              </div>
              <motion.p
                style={{ margin: 0, padding: 0 }}
                initial="initial"
                animate="animate"
                variants={waveAnimation}
              >
                nga <br /> Burimi i Istogut
              </motion.p>
              <motion.p
                initial="initial"
                animate="animate"
                variants={waveAnimation}
              ></motion.p>
            </div>
            <div style={{ position: "relative", height: "400px" }}>
              {["MOKNE", "MOKNE", "MOKNE"].map((text, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate={visibleParagraphs[index] ? "visible" : "hidden"}
                  variants={revealAnimation}
                >
                  <p className={`mokne-paragraph mokne-paragraph${index}`}>
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="third-content">
          {/* <img src={bottle} className="mokne-bottle-image" /> */}
        </div>
      </div>
    </>
  );
};

export default Home;
