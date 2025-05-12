"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import MotionSection from "./MotionSection";
const Hero = () => {
  return (
    <MotionSection className="text-[#C5D8C3] h-[100vh] md:h-[60vh] xl:h-screen flex items-center  px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <section className="flex flex-col items-center justify-center mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-col  text-[#C5D8C3] items-center justify-center mx-auto max-w-[600px] "
        >
          <span className="h-4 w-0.5 bg-[#C5D8C3] mb-1"></span>
          <p className="uppercase text-[16px] md:text-[24px] text-[#C5D8C3]">
            degen cyberlab
          </p>

          <TypeAnimation
            sequence={[
              "Securing The Future,",
              3000,
              "Powering Innovations.",
              3000,
            ]}
            wrapper="span"
            speed={10}
            style={{
              fontSize: "3em",
              display: "inline-block",
              fontWeight: "bolder",
              margin: "10px 0px",
              textAlign: "center",
              color: "white",
            }}
            repeat={Infinity}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-[15px] md:text-[20px] max-w-[500px] text-center text-[#C5D8C3]"
          >
            Welcome to Degen CyberLabs, we specialize in crafting bespoke
            technology solutions designed to meet your unique needs. Our
            commitment to excellence, combined with innovative thinking, sets us
            apart as leaders in the industry.
          </motion.p>
          
        </motion.div>

        <div className="absolute">
          <Image
            className="opacity-30 spin-slow"
            src="/mainIconsdark.svg"
            alt="icon"
            width={600}
            height={600}
          />
        </div>
      </section>
    </MotionSection>
  );
};

export default Hero;
