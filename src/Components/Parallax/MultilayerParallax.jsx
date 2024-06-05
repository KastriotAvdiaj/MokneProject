import React, { useEffect, useRef, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./MultilayerParallax.css";
import mokneImage from "../../assets/bootleMokne.jpg";
import mokneWatterBottle from "../../assets/mokneWaterBottle1.png";
import { Reveal } from "../../Components/Reveal/Reveal";

export const MultilayerParallax = () => {
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

  return (
    <div className="multilayer-parallax-wrapper">
      <div className="pattern-background" ref={ref}>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={revealAnimation}
          className="image-container"
        >
          <Reveal>
            <img src={mokneWatterBottle} alt="Mokne Bottle" className="mokne-image" style={{marginLeft:"3rem"}} />
          </Reveal>
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
      <div className="multilayer-parallax-div1" />
      <div className="multilayer-parallax-div2" />
    </div>
  );
};
