"use client"

import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import { fadeIn } from '@/lib/animation-variants';

interface MotionSectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  fullHeight?: boolean;
}

const MotionSection = ({
  id,
  children,
  className,
  direction = 'up',
  delay = 0,
  fullHeight = true,
}: MotionSectionProps) => {
    const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px",
  });
  return (
    <motion.section
      ref={ref}
      id={id}
      variants={fadeIn(direction, delay)}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      exit="hidden"
      className={className}
    >
      {children}
    </motion.section>
  )
}

export default MotionSection