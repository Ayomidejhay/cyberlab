"use client";

import React from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "motion/react";
import { useEffect, useRef } from "react";

type AnimatedCounterProps = {
  from?: number;
  to: number;
  duration?: number;
  color?: string;
  fontSize?: number;
  className?: string;
  decimals?: number;
  suffix?: string;
};

const Stat = ({
  from = 0,
  to,
  duration = 2,
  color = "",
  fontSize = 48,
  className = "text-bold",
  decimals = 1,
  suffix = "",
}: AnimatedCounterProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-50px" });
  const count = useMotionValue(from);

  const formatted = useTransform(count, latest =>
    `${Math.round(latest)}${suffix}`
  )

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, {
        duration,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [inView, to, duration]);
  return (
    <motion.pre
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8 }}
      style={{
        fontSize,
        color,
        fontWeight: "bold",
        textAlign: "center",
        margin: 0,
      }}
    >
      {formatted}
    </motion.pre>
  );
};

export default Stat;
