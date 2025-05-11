"use client";

import CustomHero from "@/components/CustomHero";
import Socials from "@/components/Socials";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ChevronLeft, Github, Linkedin, Twitter } from "lucide-react";
import { getTeamMembers } from "@/lib/data";

export default function page() {
  const [teamMembers] = useState(getTeamMembers());
  return (
    <div>
      <CustomHero
        title="Our Team"
        imageurl="/about-5.jpg"
        link="/aboutUs/team"
        header="Meet the Team"
      />

      <section className="pt-10 bg-transparent sm:pt-16 lg:pt-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
              Real humans are here to help you building your brand
            </h2>
            <p className="mt-6 text-lg text-gray-900">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
            <Link
              href="/contact"
              title=""
              className="inline-flex items-center justify-center px-6 py-4 mt-12 text-base font-semibold text-white transition-all duration-200 bg-[#1f3a3a] border border-transparent rounded-md hover:bg-black focus:bg-black"
              role="button"
            >
              <svg
                className="w-5 h-5 mr-2 -ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Contact our support
            </Link>
          </div>
        </div>

        <div className="container mx-auto 2xl:px-12">
          <Image
            className=" mt-6"
            src="https://www.transparentpng.com/thumb/business-people/WsAQ1g-business-people.png"
            alt=""
            width={700}
            height={700}
          />
        </div>
      </section>
      <section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div>
              <p className="uppercase text-[16px] text-[#1f3a3a] font-bold">
                meet our ceo
              </p>
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Hey 👋 I am <br className="block sm:hidden" />
                Jerry Carter
              </h2>
              <p className="max-w-lg mt-3 text-lg leading-relaxed text-gray-600 md:mt-8">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>

              <p className="mt-4 text-xl text-gray-600 md:mt-8">
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full bottom-0.5 h-2 bg-[#1f3a3a]/30"></span>
                  <span className="relative"> Have a question? </span>
                </span>
                <br className="block sm:hidden" />
                Ask me on{" "}
                <a
                  href="#"
                  title=""
                  className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline"
                >
                  Twitter
                </a>
              </p>
            </div>

            <div className="relative">
              <img
                className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                alt=""
              />

              <Image
                width={500}
                height={500}
                className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                src="https://www.transparentpng.com/thumb/business-people/QtNHXc-business-people-best.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="my-20 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className=" flex flex-col gap-10">
        <div className="max-w-[400px] ">
          <h2 className="uppercase text-[14px] text-[#C5D8C3] font-bold leading-tight">
            Meet The Team
          </h2>
          <p className="text-4xl text-white">
          We're a passionate group of professionals dedicated to excellence and innovation.
          </p>
        </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white"
                >
                  <div className="h-52 overflow-hidden">
                    <img
                      src={member.image}
                      alt={`${member.name}'s portrait`}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src =
                              "https://ui-avatars.com/api/?name=" +
                              encodeURIComponent(member.name);
                          }}
                        />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold text-xl">{member.name}</h3>
                        <p className="text-indigo-600">{member.position}</p>
                      </div>
                    </div>
                    <p className="text-slate-600 mb-4">{member.bio}</p>
                    <div className="flex gap-3">
                      {member.social?.github && (
                        <a
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-600 hover:text-indigo-600 transition-colors"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {member.social?.linkedin && (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-600 hover:text-indigo-600 transition-colors"
                        >
                          <Linkedin size={20} />
                        </a>
                      )}
                      {member.social?.twitter && (
                        <a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-600 hover:text-indigo-600 transition-colors"
                        >
                          <Twitter size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
