import React from "react";
import Divider from "../Divider/Divider";
import { FadeIn } from "../Reveal/FadeIn";
import "./Price.css";

export const Price = ({
  bottleSize,
  bottlePrice,
  packetPrice,
  left,
  x,
  y,
  right,
  top,
  bottom,
}) => {
  return (
    <FadeIn
      x={x}
      y={y}
      left={left}
      right={right}
      top={top}
      bottom={bottom}
      position={"absolute"}
    >
      <div
        className="first-bottle-div"
        style={{ left: left, right: right, top: top, bottom: bottom }}
      >
        <p>{bottleSize}</p>
        <Divider color={"#2958F9"} />
        <p className="first-bottle-price">{bottlePrice} me copë</p>
        <p className="first-bottle-price">{packetPrice} me kuti</p>
      </div>
    </FadeIn>
  );
};
