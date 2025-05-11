import React from "react";
import Map from "../../components/Map";
import { div } from "framer-motion/client";
import Socials from "../../components/Socials";
import CustomHero from "@/components/CustomHero";

export default function page() {
  return (
    <div className="max-w-[1500px] overflow-x-hidden  mx-auto  ">
        <CustomHero title="Contact Us" link="/contact" imageurl="/contacts.jpg" header="Reach Out To Us"/>
      <div className=" px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mt-20">
        <section>
          <div>
            <div className=" flex flex-col md:flex-row gap-10 md:gap-5 lg:gap-10">
              <div className="flex-1">
                <div className="flex justify-center flex-col gap-5">
                  <div className="max-w-[400px]">
                    <p className="uppercase text-[14px] text-[#C5D8C3] font-bold leading-tight">
                      Get in touch
                    </p>
                    <p className="text-4xl text-white">
                      Have questions or want to get involved? Conatct us today.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">
                      You can also reach us via this medium
                    </p>
                    <div className="flex gap-5 mt-3 pl-5">
                      <span className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-phone-call-icon lucide-phone-call"
                        >
                          <path d="M13 2a9 9 0 0 1 9 9" />
                          <path d="M13 6a5 5 0 0 1 5 5" />
                          <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                        </svg>
                      </span>
                      <p>+234 709 9163 823</p>
                    </div>
                    <div className="flex gap-5 mt-3 pl-5">
                      <span className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-mail-icon lucide-mail"
                        >
                          <path d="M22 4H2v16h20V4z" />
                          <path d="m22 4-10 7L2 4" />
                          <path d="M2 8l10 7 10-7" />
                        </svg>
                      </span>
                      <p>degencyberlabs@gmail.com</p>
                    </div>
                    <div className="flex gap-5 mt-3 pl-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-map-pin-icon lucide-map-pin"
                      >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <p>1234, Lagos, Nigeria</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">
                      Follow us on social media for the latest updates
                    </p>
                    <div className="pl-5 mt-3">
                      <Socials />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <form className="px-4 py-7 text-[13px] border border-primary bg-primary bg-opacity-20 rounded-lg flex flex-col gap-3">
                  <div>
                    <p className="text-3xl mb-3 overflow-hidden">
                      Send a message
                    </p>
                    <p>
                      Have questions or want to get involved? Contact us today.
                    </p>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-3">
                    <div className="flex flex-col flex-1">
                      <label className="font-semibold" htmlFor="firstName">
                        First Name
                      </label>
                      <input
                        className="outline-none border-none rounded-sm px-5 py-3 bg-white text-black"
                        type="text"
                        placeholder="King"
                      />
                    </div>
                    <div className="flex flex-col flex-1">
                      <label className="font-semibold" htmlFor="lastName">
                        Last Name
                      </label>
                      <input
                        className="outline-none border-none rounded-sm px-5 py-3 bg-white text-black"
                        type="text"
                        placeholder="Manifest"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="font-semibold" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="outline-none border-none rounded-sm px-5 py-3 bg-white text-black"
                      type="email"
                      placeholder="king@gmail.com"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-semibold" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className="outline-none border-none rounded-sm px-5 py-3 bg-white resize-none h-32 text-black"
                      name="message"
                      id="message"
                      placeholder="start here..."
                    ></textarea>
                  </div>
                  <div className="flex justify-end">
                    <button className="text-white bg-blue">
                      Send a message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Map />
      </div>
    </div>
  );
}
