import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const FadeIn = ({
  children,
  x,
  y,
  position,
  left,
  right,
  top,
  bottom,
  once,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: once ? once : false });
  const controls = useAnimation();

  const revealAnimation = {
    hidden: { opacity: 0, x: x, y: y ? y : 100 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);
  return (
    <div >
      <motion.div
        variants={revealAnimation}
        initial="hidden"
        animate={controls}
        style={{
          width: "100%",
          position: position ? position : "relative",
          left: left,
          right: right,
          top: top,
          bottom: bottom,
          zIndex: 2,
        }}
        ref={ref}
      >
        {children}
      </motion.div>
    </div>
  );
};
