import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const FadeIn = ({ children, x }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  const revealAnimation = {
    hidden: { opacity: 0, x: x },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeIn",
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
    <div ref={ref}>
      <motion.div
        variants={revealAnimation}
        initial="hidden"
        animate={controls}
      >
        {children}
      </motion.div>
    </div>
  );
};
