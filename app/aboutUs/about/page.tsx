"use client";

import Arrow from "@/components/Arrow";
import CustomHero from "@/components/CustomHero";
import Faq from "@/components/Faq";
import MotionSection from "@/components/MotionSection";
import Stat from "@/components/Stat";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdEngineering } from "react-icons/md";
import { SiGoogleearthengine } from "react-icons/si";
import { SiTrustedshops } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animation-variants";

export default function page() {
  return (
    <div>
      <CustomHero
        title="Who we are"
        imageurl="/about-5.jpg"
        link="/aboutUs/about"
        header="Who We Are"
      />
      <div className="over">
        <div className="px-4 my-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <section>
            <div className="hidden xl:flex gap-10 flex-col md:flex-row ">
              <div className="flex-1">
                <MotionSection
                  direction="right"
                  delay={0.2}
                  className="h-[500px] w-[100%] md:w-[300px] relative"
                >
                  <Image
                    src="/about-3.jpg"
                    alt="about-image"
                    fill
                    className="object-cover rounded-2xl"
                  />
                </MotionSection>
              </div>
              <div className="flex-1">
                <div className="h-[500px] w-[100%] md:w-[300px] relative flex flex-col gap-5">
                  <div className="h-[450px] w-[100%] md:w-[300px] relative">
                    <Image
                      src="/about-1.jpg"
                      alt="about-image"
                      fill
                      className="object-cover rounded-2xl"
                    />
                  </div>
                  <div className="h-[150px] w-[100%] md:w-[300px] text-center bg-[#193d3d] rounded-2xl flex flex-col justify-center items-center gap-2">
                    <Stat to={10} suffix="+" />
                    <p>Years of Experience</p>
                  </div>
                </div>
              </div>
              <MotionSection
                direction="left"
                delay={0.2}
                className="flex-2 bg-[#193d3d] rounded-2xl"
              >
                <div className=" px-5 py-8 flex flex-col justify-center gap-5">
                  <h3 className="uppercase text-[14px] text-[#C5D8C3] mb-4">
                    about dexteer
                  </h3>
                  <p className="text-4xl text-white">Who We Are</p>
                  <p>
                    At DextEer Software Company, we are a forward-thinking team
                    of software engineers, designers, and technology strategists
                    committed to building innovative digital solutions that
                    drive real-world impact. Founded on a passion for excellence
                    and a belief in the power of technology to transform
                    businesses, we specialize in delivering high-quality,
                    scalable, and secure software products that solve complex
                    problems and enhance user experiences. <br /> <br /> At
                    DextEer, we don’t just write code—we build solutions that
                    empower people, streamline operations, and shape the future
                    of digital experiences.
                  </p>
                </div>
              </MotionSection>
            </div>
            <div className="xl:hidden  ">
              <div className="flex  gap-10 flex-col md:flex-row">
                <div className="flex-1">
                  <MotionSection direction="right" delay={0.2} className="">
                    <div className="h-[650px] sm:h-[500px] md:h-[600px] lg:h-[500px] w-[100%] md:w-[300px] relative flex flex-col gap-5">
                      <div className="h-[450px] w-[100%] md:w-[300px] relative">
                        <Image
                          src="/about-1.jpg"
                          alt="about-image"
                          fill
                          className="object-cover rounded-2xl"
                        />
                      </div>
                      <div className="h-[150px] w-[100%] md:w-[300px] text-center bg-[#193d3d] rounded-2xl flex flex-col justify-center items-center gap-2">
                        <Stat to={10} suffix="+" />
                        <p>Years of Experience</p>
                      </div>
                    </div>
                  </MotionSection>
                </div>
                <div className="flex-2 ">
                  <div className=" bg-[#193d3d] h-[650px] sm:h-[500px] lg:h-[500px] md:h-[600px] rounded-2xl flex flex-col justify-center">
                    <MotionSection
                      direction="left"
                      delay={0.2}
                      className=" px-5 py-8 flex flex-col justify-center  gap-5"
                    >
                      <h3 className="uppercase text-[14px] text-[#C5D8C3] mb-4">
                        about dexteer
                      </h3>
                      <p className="text-4xl text-white">Who We Are</p>
                      <p>
                        At DextEer Software Company, we are a forward-thinking
                        team of software engineers, designers, and technology
                        strategists committed to building innovative digital
                        solutions that drive real-world impact. Founded on a
                        passion for excellence and a belief in the power of
                        technology to transform businesses, we specialize in
                        delivering high-quality, scalable, and secure software
                        products that solve complex problems and enhance user
                        experiences. <br /> <br /> At DextEer, we don’t just
                        write code—we build solutions that empower people,
                        streamline operations, and shape the future of digital
                        experiences.
                      </p>
                    </MotionSection>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-20 ">
            <div className="hidden md:flex  gap-10 flex-row">
              <div className="flex-1 flex flex-col justify-between h-[600px] lg:h-[500px] gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex-1 rounded-2xl px-5 py-3 bg-[#193d3d] flex flex-col gap-3 justify-center"
                >
                  <p className="uppercase bg-white text-[#1f3a3a] w-[150px] p-2 text-center rounded-2xl">
                    our vision
                  </p>
                  <p>
                    To deliver innovative, reliable, and scalable software
                    solutions that empower businesses, improve lives, and drive
                    digital transformation across industries.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex-1 rounded-2xl px-5 py-3 bg-[#193d3d] flex flex-col gap-3 justify-center"
                >
                  <p className="uppercase bg-white text-[#1f3a3a] w-[150px] p-2 text-center rounded-2xl">
                    our mission
                  </p>
                  <p>
                    To be a global leader in software innovation—trusted for our
                    technical excellence, customer-centric approach, and
                    positive impact on the digital world.
                  </p>
                </motion.div>
              </div>
              <div className="flex-1 relative  h-[600px] lg:h-[500px]">
                <Image
                  src="/about-5.jpg"
                  fill
                  sizes="100vw"
                  alt="about-image"
                  className="object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-[#193d3d]/80 z-10 rounded-2xl" />
                <div className="absolute inset-0 z-20 flex flex-col gap-5  justify-center py-2 px-5 ">
                  <p className="uppercase bg-white text-[#1f3a3a] w-[150px] p-2 text-center  rounded-2xl">
                    our history
                  </p>
                  <p>
                    Founded in 2015 by a group of passionate developers and tech
                    enthusiasts, DextEer Software Company began as a small
                    startup with a bold vision: to simplify technology and make
                    powerful software accessible to everyone. What started as a
                    two-person operation has grown into a dynamic team serving
                    clients across sectors including finance, health, education,
                    and e-commerce <br /> <br />
                    Over the years, DextEer has evolved from delivering basic
                    web and mobile applications to building complex enterprise
                    systems, AI-driven platforms, and cloud-native solutions.
                    Our journey is defined by adaptability, continuous learning,
                    and an unwavering commitment to quality
                  </p>
                </div>
              </div>
            </div>

            <div className="md:hidden ">
              <div className="flex-1 relative  h-[650px] sm:[600px] lg:h-[500px] mb-10">
                <Image
                  src="/about-5.jpg"
                  fill
                  sizes="100vw"
                  alt="about-image"
                  className="object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-[#193d3d]/80 z-10 rounded-2xl" />
                <div className="absolute inset-0 z-20 flex flex-col gap-5  justify-center py-2 px-5 ">
                  <p className="uppercase bg-white text-[#1f3a3a] w-[150px] p-2 text-center  rounded-2xl">
                    our history
                  </p>
                  <p>
                    Founded in 2015 by a group of passionate developers and tech
                    enthusiasts, DextEer Software Company began as a small
                    startup with a bold vision: to simplify technology and make
                    powerful software accessible to everyone. What started as a
                    two-person operation has grown into a dynamic team serving
                    clients across sectors including finance, health, education,
                    and e-commerce <br /> <br />
                    Over the years, DextEer has evolved from delivering basic
                    web and mobile applications to building complex enterprise
                    systems, AI-driven platforms, and cloud-native solutions.
                    Our journey is defined by adaptability, continuous learning,
                    and an unwavering commitment to quality
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex-1 rounded-2xl px-5 py-3 bg-[#193d3d] flex flex-col gap-3 justify-center"
                >
                  <p className="uppercase bg-white text-[#1f3a3a] w-[150px] p-2 text-center rounded-2xl">
                    our vision
                  </p>
                  <p>
                    To deliver innovative, reliable, and scalable software
                    solutions that empower businesses, improve lives, and drive
                    digital transformation across industries.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex-1 rounded-2xl px-5 py-3 bg-[#193d3d] flex flex-col gap-3 justify-center"
                >
                  <p className="uppercase bg-white text-[#1f3a3a] w-[150px] p-2 text-center rounded-2xl">
                    our mission
                  </p>
                  <p>
                    To be a global leader in software innovation—trusted for our
                    technical excellence, customer-centric approach, and
                    positive impact on the digital world.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          <MotionSection direction="up" delay={0.2} className="mt-20">
            <div className="flex flex-col gap-5">
              <div className="flex h-[400px] gap-5">
                <div className="hidden md:block md:flex-1 lg:flex-2 relative">
                  <Image
                    src="/about-4.jpg"
                    alt="image"
                    sizes="100vw"
                    fill
                    className="rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-[#193d3d]/50 z-10 rounded-2xl" />
                </div>
                <div className="flex-1 bg-[#1f3a3a]/30 rounded-2xl flex flex-col justify-center gap-5 px-5">
                  <p className="text-4xl">
                    We're here to help you achieve your goals
                  </p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Debitis unde distinctio fugit minima aliquam minus ipsa.
                    Tempora culpa
                  </p>
                  <Link
                    href="/contact"
                    className="p-2 bg-[#00ffff] hover:bg-[#00d4d4] rounded-2xl border border-[#00ffff] w-[150px] text-[#0a0a0a] flex justify-center items-center"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex-1 bg-white/50 rounded-2xl p-3 lg:p-5 flex flex-col gap-3 justify-center text-[#1f3a3a]"
                >
                  <div>
                    <MdEngineering className="h-16 w-16 text-white/50 bg-[#193d3d] flex justify-center items-center rounded-full p-2" />
                  </div>
                  <p>Innovative</p>
                  <p>
                    We embrace cutting-edge technologies and creative thinking
                    to deliver forward-thinking solutions that solve real-world
                    problems.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex-1 bg-black/30 rounded-2xl p-3 lg:p-5 flex flex-col gap-3 justify-center"
                >
                  <div>
                    <SiTrustedshops className="h-16 w-16 text-black/90 bg-white flex justify-center items-center rounded-full p-2" />
                  </div>
                  <p>Reliable</p>
                  <p>
                    Clients trust us for consistent quality, transparent
                    communication, and dependable results—every time.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  viewport={{ once: true }}
                  className="flex-1 bg-[#1f3a3a]/70 rounded-2xl p-3 lg:p-5 flex flex-col gap-3 justify-center"
                >
                  <div>
                    <SiGoogleearthengine className="h-16 w-16 text-white/50 bg-black/30 flex justify-center items-center rounded-full p-2" />
                  </div>
                  <p>Agile</p>
                  <p>
                    Our adaptive and flexible approach allows us to respond
                    quickly to changes and deliver value faster.
                  </p>
                </motion.div>
              </div>
            </div>
          </MotionSection>
        </div>
        <Faq />
      </div>
    </div>
  );
}
