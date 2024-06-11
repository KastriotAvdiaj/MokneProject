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
import DividerWithLogo from "../../Components/Divider/DividerWithLogo";
import Divider from "../../Components/Divider/Divider";
import PixiComponent from "../../Components/PixiJs/PixiComponent";

export const AboutUs = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <div>

    
      <div className="about-us-first-container">
        <div className="about-us-first">
          <Reveal>
            <motion.h1 style={{ scale }}>
              Nga bjeshkët e Istogut <br /> në tryezën tuaj.
            </motion.h1>
          </Reveal>
          <div className="under-h1-container">
            <motion.div className="firstH1-wrapper" style={{ scale }}>
              <DividerWithLogo />
              <FadeIn x={-300} y={0} once={true}>
                <h3>
                  Kompania Mokne shpk është kompani e re prodhuese e cila
                  aktivitet primar e ka ujin natyral të amballazhuar.
                </h3>
              </FadeIn>
            </motion.div>
            <FadeIn>
              <motion.div
                className="about-us-video-container"
                style={{ scale }}
              >
                <motion.video
                  className="about-us-video"
                  src={bottlesVid}
                  autoPlay
                  loop
                  muted
                />
              </motion.div>
            </FadeIn>
            <motion.div className="secondH1-wrapper" style={{ scale }}>
              <DividerWithLogo />
              <FadeIn x={300} y={0} once={true}>
                <h3>
                  Ne besojmë në njohjen dhe shpërblimin e punonjësve të
                  jashtëzakonshëm, dhe ofrojmë mundësi për rritje dhe avancim
                  brenda kompanisë sonë.
                </h3>
              </FadeIn>
            </motion.div>
          </div>
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
