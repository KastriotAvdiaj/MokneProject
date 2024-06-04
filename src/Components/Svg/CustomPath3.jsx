import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const CustomPath3 = () => {
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
        d="M905 380 l70 0 l0 -200 l220 0 "
        stroke="white"
        fill="transparent"
        strokeWidth="4"
        initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
        animate={controls}
      />
      <circle cx="905" cy="380" r="6" fill="red" />
      <circle cx="1200" cy="180" r="6" fill="red" />
    </svg>
  );
};

export default CustomPath3;
