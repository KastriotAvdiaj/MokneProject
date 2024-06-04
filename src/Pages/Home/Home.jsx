import React, { useEffect, useState } from "react";
import { useScroll, useSpring, motion } from "framer-motion";
import Mokne3 from "../../assets/final7-vmake.mp4";
import "./Home.css";
import mokneLogo from "../../assets/mokneLogoWider.jpg";
import mokneBottle from "../../assets/mokneBottles.png";
import { FadeIn } from "../../Components/Reveal/FadeIn";
import Divider from "../../Components/Divider/Divider";
import { ImageContainer } from "../../Components/ImageContainer/ImageContainer";
import foto1 from "../../assets/instagramImage4.jpg";
import foto2 from "../../assets/instagramImage1.jpg";
import foto3 from "../../assets/instagramImage2.jpg";
import foto4 from "../../assets/instagramImage3.jpg";
import DividerWithLogo from "../../Components/Divider/DividerWithLogo";
import { MultilayerParallax } from "../../Components/Parallax/MultilayerParallax";
import { Reveal } from "../../Components/Reveal/Reveal";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const fotoStyle = {
    width: "auto",
    height: "400px",
    objectFit: "cover",
  };

  const fotot = [foto1, foto2, foto3, foto4];

  const [onTopDivClassname, setOnTopDivClassname] = useState("on-top-div");

  useEffect(() => {
    const timer = setTimeout(() => {
      setOnTopDivClassname("on-top-div-over");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="video-container">
        {/* <motion.video autoPlay muted loop className="background-video">
          <source src={Mokne3} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video> */}
        <div className={onTopDivClassname}>
          <ImageContainer>
            {fotot.map((foto, index) => (
              <img
                key={index}
                src={foto}
                style={fotoStyle}
                alt={`Foto ${index}`}
              />
            ))}
          </ImageContainer>
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
            <div className="first-bottle-div">
              <p>250 ML</p>
              <Divider color={"#2958F9"} />
              <p className="first-bottle-price">0.25€ me copë</p>
              <p className="first-bottle-price">4.50€ me kuti</p>
            </div>
          </div>
        </div>
        <MultilayerParallax />
        <div className="third-content"></div>
      </div>
    </>
  );
};

export default Home;
