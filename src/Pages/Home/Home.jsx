import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Mokne3 from "../../assets/final7-vmake.mp4";
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

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
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
    <div className="video-container">
      <video autoPlay muted loop className="background-video">
        <source src={Mokne3} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="on-top-div">
        <div className="mokne-paragraph">
          {/* <p className="mokne-paragraph2">MOKNE</p> */}
        </div>
      </div>
      <div className="pattern-background">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={revealAnimation}
          className="image-container"
        >
          <img src={mokneImage} alt="Mokne Bottle" className="mokne-image" />
          <div className="parahraph-div">
            <div className="parahraph-div2">
              <motion.p
                initial="initial"
                animate="animate"
                variants={waveAnimation}
              >
                Shijojeni
              </motion.p>
              <motion.p
                initial="initial"
                animate="animate"
                variants={waveAnimation}
              >
                ujin
              </motion.p>
            </div>
            <motion.p
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
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
