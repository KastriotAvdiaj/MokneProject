import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const CustomPath4 = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (inView) {
      controls.start({
        strokeDashoffset: 0,
        transition: { duration: 2, ease: "easeIn" },
      });
    } else {
      controls.start({
        strokeDashoffset: 1000,
      });
    }
  }, [controls, inView]);

  return (
    <svg width="100%" height="100%" style={{ position: "absolute" }} ref={ref}>
      <motion.path
        d="M1025 500 l140 0 l0 50 l96 0 "
        stroke="white"
        fill="transparent"
        strokeWidth="4"
        initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
        animate={controls}
      />
      <circle cx="1020" cy="500" r="6" fill="red" />
      {/* <circle cx="1275" cy="550" r="6" fill="red" /> */}
    </svg>
  );
};

export default CustomPath4;
