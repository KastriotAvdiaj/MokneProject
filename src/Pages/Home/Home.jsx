import React from "react";
import { useEffect, useState } from "react";
import { useScroll, useSpring, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Mokne3 from "../../assets/final7-vmake.mp4";
import image from "../../assets/mountains.jpg";
import "./Home.css";
import mokneImage from "../../assets/bootleMokne.jpg";

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

  const [visibleParagraphs, setVisibleParagraphs] = useState([
    false,
    false,
    false,
  ]);

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

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="video-container">
        <video autoPlay muted loop className="background-video">
          <source src={Mokne3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="on-top-div"></div>
        <div className="pattern-background">
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
        <div className="third-content"></div>
      </div>
    </>
  );
};

export default Home;
