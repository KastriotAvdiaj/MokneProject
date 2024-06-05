import React, { useEffect, useState } from "react";
import { useScroll, useSpring, motion } from "framer-motion";
import "./Home.css";
import mokneLogo from "../../assets/mokneLogoWider.jpg";
import mokneBottle from "../../assets/mokneBottles.png";
import { FadeIn } from "../../Components/Reveal/FadeIn";
import { Price } from "../../Components/Pricing/Price";
import { ImageContainer } from "../../Components/ImageContainer/ImageContainer";
import CustomPath1 from "../../Components/Svg/CustomPath1";
import CustomPath2 from "../../Components/Svg/CustomPath2";
import DividerWithLogo from "../../Components/Divider/DividerWithLogo";
import { MultilayerParallax } from "../../Components/Parallax/MultilayerParallax";
import { Reveal } from "../../Components/Reveal/Reveal";
import CustomPath3 from "../../Components/Svg/CustomPath3";
import CustomPath4 from "../../Components/Svg/CustomPath4";
import subtractImage from "../../assets/subtract3.png";
import mokneSingleBottle from "../../assets/noBcgImage2.png";

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
        <FadeIn
          x={-100}
          position={"absolute"}
          top={0}
          right={0}
          bottom={0}
          once={true}
        >
          <img
            src={mokneSingleBottle}
            className="mokne-single-bottle"
            alt="bottle"
          />
        </FadeIn>

        <div className={"on-top-div"}></div>
        <div className={"on-top-div2"}>
          <div className="on-top-div-content">
            <h2 className="on-top-div-h2">
              <Reveal>Bashkëpunim me natyrën,</Reveal>
              {/* <br />{" "} */}
              <Reveal>
                <section
                  style={{
                    fontSize: "30px",
                    color: "#80675E",
                    fontStyle: "italic",
                  }}
                >
                  për një shije kualitative!
                </section>
              </Reveal>
            </h2>
          </div>
        </div>
        <div className="mid-section-wrapper">
          <div className="first-content">
            <FadeIn x={-300}>
              <img src={mokneLogo} alt="" className="mokne-logo" />
            </FadeIn>
            <section>
              <Reveal>
                <h1 className="mokneLogo-h1-1">
                  "Shije e pastër,
                  <br /> jetë e shëndetshme."
                </h1>
              </Reveal>
              <FadeIn x={300}>
                <h1 className="mokneLogo-h1">
                  Etiketa jonë e shishës është e inspiruar nga mrekullia e
                  bjeshkëve Mokne.
                </h1>
              </FadeIn>
            </section>
          </div>
          <DividerWithLogo />
          <div className="second-content">
            <img src={mokneBottle} className="mokne-bottle-image" />
            <Price
              x={-40}
              y={-150}
              left={"10%"}
              bottleSize={"250 ML"}
              bottlePrice={"0.25€"}
              packetPrice={"5.00€"}
            />
            <Price
              x={-20}
              y={100}
              left={"12%"}
              top={"10%"}
              bottleSize={"330 ML"}
              bottlePrice={"0.40€"}
              packetPrice={"9.00€"}
            />
            <Price
              x={-40}
              y={-150}
              right={"10%"}
              bottleSize={"1 L"}
              bottlePrice={"0.70€"}
              packetPrice={"15.50€"}
            />
            <Price
              x={-20}
              y={100}
              right={"12%"}
              top={"10%"}
              bottleSize={"1.5 L"}
              bottlePrice={"1.00€"}
              packetPrice={"22.50€"}
            />
            <CustomPath1 />
            <CustomPath2 />
            <CustomPath3 />
            <CustomPath4 />
          </div>
        </div>
        <MultilayerParallax />
        <div className="third-content"></div>
      </div>
    </>
  );
};

export default Home;
