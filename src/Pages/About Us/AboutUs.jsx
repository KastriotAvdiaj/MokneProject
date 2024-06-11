import React from "react";
import "./AboutUs.css";
import Montains from "../../assets/natyre water.jpg";
import Bottle from "../../assets/noBcgImage2.png";
import trees from "../../assets/trees.png";
import { InfiniteSlider } from "../../Components/InfiniteSlider/InfiniteSlider";
import { FadeIn } from "../../Components/Reveal/FadeIn";
import { Reveal } from "../../Components/Reveal/Reveal";
import bottlesVid from "../../assets/compressedVid.mp4";
import { motion, useScroll, useTransform } from "framer-motion";
import Divider from "../../Components/Divider/Divider";

export const AboutUs = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <div>
      <div className="about-us-first-container">
        <div className="about-us-first">
          <Reveal>
            <motion.h1 style={{ scale }}>
              Nga bjeshkët e Istogut <br /> në tryezën tuaj
            </motion.h1>
          </Reveal>
          <motion.div className="about-us-video-container" style={{ scale }}>
            <motion.video
              className="about-us-video"
              src={bottlesVid}
              autoPlay
              loop
              muted
              style={{ scale }}
            />
          </motion.div>
        </div>
      </div>
      <div className="about-us" style={{ backgroundImage: `url(${Montains})` }}>
        <div
          className="trees-overlay"
          style={{ backgroundImage: `url(${trees})` }}
        ></div>
        <FadeIn position={"absolute"} top={0} right={40} y={-20} once={true}>
          <img src={Bottle} className="about-us-bottle" />
        </FadeIn>
        <FadeIn position={"absolute"} top={0} right={40} y={20} once={true}>
          <img src={Bottle} className="about-us-bottle2" />
        </FadeIn>
        <div className="infiniteSlider-container">
          <InfiniteSlider />
        </div>
      </div>
    </div>
  );
};
