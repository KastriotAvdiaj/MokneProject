import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const CustomPath2 = () => {
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
        d="M915 620 l-250 0 l0 -70 l-100 0 "
        stroke="white"
        fill="transparent"
        strokeWidth="4"
        initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
        animate={controls}
      />
      <circle cx="915" cy="620" r="6" fill="red" />
      <circle cx="565" cy="550" r="6" fill="red" />
    </svg>
  );
};

export default CustomPath2;
