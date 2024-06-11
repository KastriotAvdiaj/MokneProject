import React from "react";
import "./AboutUs.css";
import Montains from "../../assets/natyre water.jpg";
import Bottle from "../../assets/noBcgImage2.png";
import trees from "../../assets/trees.png";
import { InfiniteSlider } from "../../Components/InfiniteSlider/InfiniteSlider";
import { FadeIn } from "../../Components/Reveal/FadeIn";

export const AboutUs = () => {
  return (
    <div className="about-us" style={{ backgroundImage: `url(${Montains})` }}>
      <div
        className="trees-overlay"
        style={{ backgroundImage: `url(${trees})` }}
      ></div>
      <FadeIn position={"absolute"} top={0} right={40} y={-20}>
        <img src={Bottle} className="about-us-bottle" />
      </FadeIn>
      <FadeIn position={"absolute"} top={0} right={40} y={20}>
        <img src={Bottle} className="about-us-bottle2" />
      </FadeIn>

      <div className="about-us-content">
        <h1>Rreth MOKNE</h1>
        <p>
          Kompania Mokne shpk është kompani e re prodhuese e cila aktivitet
          primar e ka ujin natyral të amballazhuar.
        </p>
        <p>
          Ne besojmë në njohjen dhe shpërblimin e punonjësve të jashtëzakonshëm,
          dhe ofrojmë mundësi për rritje dhe avancim brenda kompanisë sonë.
        </p>
      </div>
      <InfiniteSlider />
    </div>
  );
};
