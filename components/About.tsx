import Image from "next/image";
import React from "react";
import MotionSection from "./MotionSection";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animation-variants";

const About = () => {
  return (
    <MotionSection
      direction="up"
      delay={0.2}
      className="  mb-40 mx-auto max-w-7xl sm:px-6 lg:px-8"
    >
      <div className="flex bg-[#193d3d]">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex-1 hidden sm:block h-[500px] relative"
        >
          <Image
            src="/about.jpg"
            alt="about-image"
            className="object-cover"
            fill
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex-1 px-4 py-8 flex flex-col justify-center sm:pr-6 lg:pr-8"
        >
          <motion.div variants={fadeIn('up', 0.4)}>
            <h3 className="uppercase text-[14px] text-[#C5D8C3] mb-4">
              about us
            </h3>
            <p className="text-4xl text-white">Who We Are</p>
            <p>
              We are a team of passionate developers, designers, and
              cybersecurity experts committed to delivering cutting-edge digital
              solutions. Whether you're building a robust web platform, a
              seamless mobile app, or securing your digital assets, we’ve got
              you covered.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </MotionSection>
  );
};

export default About;
