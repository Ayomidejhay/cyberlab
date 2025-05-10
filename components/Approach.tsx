import Link from "next/link";
import React from "react";
import MotionSection from "./MotionSection";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animation-variants";

const Approach = () => {
  return (
    <MotionSection
      direction="up"
      delay={0.2}
      className="-mt-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
    >
      <div className="py-10">
        <h3 className="uppercase text-[14px] text-[#C5D8C3]">our approach</h3>
        <div className="flex flex-col gap-5 md:flex-row justify-between">
          <div className="max-w-[400px]">
            <p className="text-4xl text-white">
              Strategic Innovation, Secure by Design
            </p>
            <p className="text-[12px] my-3">
              At Dexteer CyberLab, we believe that security and innovation go
              hand in hand. Our methodology is built on a structured yet
              adaptable framework that ensures we deliver secure, high-quality,
              and scalable solutions for our clients.
            </p>
            <div className=" gap-2 text-[12px] mt-4 hidden md:flex">
              <Link
                className="bg-[#00ffff] border border-[#00ffff] hover:bg-[#00d4d4] px-5 py-2 text-[#0a0a0a] uppercase rounded-[50px]"
                href="/contact"
              >
                contact
              </Link>
              <button className="bg-[rgba(255,255,255,0.1)] border border-[#40e0d0] hover:bg-[#40e0d0] px-5 rounded-[50px] py-2 text-white uppercase">
                learn more
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4 max-w-[500px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              <span className="h-5 w-1 bg-[#C5D8C3] mb-1"></span>
              <div>
                <p className="text-white">Process</p>
                <p className="uppercase text-[12px]">
                  We start by understanding your needs, assessing risks, and
                  creating a strategic roadmap to ensure efficiency,
                  scalability, and security.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              <span className="h-5 w-1 bg-[#C5D8C3] mb-1"></span>
              <div>
                <p className="text-white">Develop</p>
                <p className="uppercase text-[12px]">
                  Using agile methodologies, we build secure, high-performance
                  web and mobile applications, integrating security best
                  practices at every stage.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              <span className="h-5 w-1 bg-[#C5D8C3] mb-1"></span>
              <div>
                <p className="text-white">Test</p>
                <p className="uppercase text-[12px]">
                  Through penetration testing and rigorous QA, we identify
                  vulnerabilities, refine performance, and ensure our solutions
                  are secure and reliable before deployment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex gap-2 text-[12px] mt-4 md:hidden">
          <Link
            className="bg-[#00ffff] border border-[#00ffff] px-5 py-2 text-[#13292b] uppercase rounded-[50px]"
            href="/contact"
          >
            contact
          </Link>

          <button className="bg-transparent border border-[#00ffff] px-5 rounded-[50px] py-2 text-[#00ffff] uppercase">
            learn more
          </button>
        </div>
      </div>
    </MotionSection>
  );
};

export default Approach;
