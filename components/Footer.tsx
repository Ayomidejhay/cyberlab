import Image from "next/image";
import React from "react";
import Logo from "./Logo";
import Socials from "./Socials";

const Footer = () => {
  return (
    <div>
      <section className="py-10  sm:pt-16 lg:pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-12">
            <div>
              <p className="text-base text-gray-500">Company</p>

              <ul className="mt-8 space-y-4">
                <li>
                  <a
                    href="/aboutUs/about"
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    About{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="/aboutUs/team"
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    Team{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="/projects"
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    Projects{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    Blog{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-base text-gray-500">Help</p>

              <ul className="mt-8 space-y-4">
                <li>
                  <a
                    href="#"
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    Customer Support{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    Delivery Details{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    Terms & Conditions{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    Privacy Policy{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-base text-gray-500">Resources</p>

              <ul className="mt-8 space-y-4">
                <li>
                  <a
                    href="#"
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    Free eBooks{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    Development Tutorial{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    How to - Blog{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    YouTube Playlist{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-base text-gray-500">Extra Links</p>

              <ul className="mt-8 space-y-4">
                <li>
                  <a
                    href="#"
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    Customer Support{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    Delivery Details{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    Terms & Conditions{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    Privacy Policy{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr className="mt-16 mb-10 border-gray-800" />

          <div className="flex flex-wrap items-center justify-between">
            {/*<img
              className="h-8 auto md:order-1"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logo-alt.svg"
              alt=""
            />*/}

            <Logo />

            <div className="md:order-3">
            <Socials  />
            </div>

            <p className="w-full mt-8 text-sm text-center text-gray-100 md:mt-0 md:w-auto md:order-2">
              © Copyright 2021, All Rights Reserved
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
