import { div } from "framer-motion/client";
import Image from "next/image";
import React from "react";
import Stat from "./Stat";
import MotionSection from "./MotionSection";

const Clients = () => {
  return (
    <div>
      <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <MotionSection direction="up" delay={0.2}>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 sm:gap-x-12 gap-y-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight">
                  1 team.
                  <br />
                  10+ years.
                  <br />
                  300+ projects.
                  <br />
                </h2>
                <p className="mt-6 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>

              <div className="lg:col-span-3 xl:col-span-4">
                <div className="grid items-center max-w-4xl grid-cols-2 mx-auto lg:grid-cols-4 gap-x-10 gap-y-16">
                  <div>
                    <Image
                      width={100}
                      height={100}
                      className="object-contain  mx-auto"
                      src="/coffee.png"
                      alt=""
                    />
                  </div>

                  <div>
                    <Image
                      width={100}
                      height={100}
                      className="object-contain  mx-auto"
                      src="/bird.png"
                      alt=""
                    />
                  </div>

                  <div>
                    <Image
                      width={100}
                      height={100}
                      className="object-contain  mx-auto"
                      src="/eaglehead.png"
                      alt=""
                    />
                  </div>

                  <div>
                    <Image
                      width={100}
                      height={100}
                      className="object-contain  mx-auto "
                      src="/logos.png"
                      alt=""
                    />
                  </div>

                  <div className="hidden lg:block">
                    <Image
                      width={100}
                      height={100}
                      className="object-contain  mx-auto"
                      src="/goldeneagle.png"
                      alt=""
                    />
                  </div>

                  <div className="hidden lg:block">
                    <Image
                      width={100}
                      height={100}
                      className="object-contain mx-auto"
                      src="/lion.png"
                      alt=""
                    />
                  </div>

                  <div className="hidden lg:block">
                    <Image
                      width={100}
                      height={100}
                      className="object-contain mx-auto"
                      src="/coffee.png"
                      alt=""
                    />
                  </div>

                  <div className="hidden lg:block">
                    <Image
                      width={100}
                      height={100}
                      className="object-contain  mx-auto"
                      src="/bird.png"
                      alt=""
                    />
                  </div>

                  <div className="hidden lg:block">
                    <Image
                      width={100}
                      height={100}
                      className="object-contain  mx-auto"
                      src="/eaglehead.png"
                      alt=""
                    />
                  </div>

                  <div className="hidden lg:block">
                    <Image
                      width={100}
                      height={100}
                      className="object-contain mx-auto"
                      src="/logos.png"
                      alt=""
                    />
                  </div>

                  <div className="hidden lg:block">
                    <Image
                      width={100}
                      height={100}
                      className="object-contain  mx-auto"
                      src="/goldeneagle.png"
                      alt=""
                    />
                  </div>

                  <div className="hidden lg:block">
                    <Image
                      width={100}
                      height={100}
                      className="object-contain  mx-auto"
                      src="/lion.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="flex items-center justify-start mt-10 space-x-3 lg:hidden">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600 block"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid items-center max-w-4xl grid-cols-2 mx-auto mt-16 lg:grid-cols-4 gap-x-10 gap-y-16 text-black">
            <div className="text-center ">
              <Stat to={10} suffix="+" color="black" />
              <p>Years of Experience</p>
            </div>
            <div className="text-center">
              <Stat to={300} suffix="+" color="black" />
              <p>Projects Completed</p>
            </div>
            <div className="text-center">
              <Stat to={100} suffix="+" color="black" />
              <p>Happy Clients</p>
            </div>
            <div className="text-center">
              <Stat to={15} suffix="+" color="black" />
              <p>Team Members</p>
            </div>
          </div>
        </MotionSection>
      </section>
    </div>
  );
};

export default Clients;
