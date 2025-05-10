"use client";

import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import MotionSection from "./MotionSection";

const faqs = [
  {
    question: "What services do you offer exactly?",
    answer:
      "We specialize in web development, mobile app development, and cybersecurity. This includes custom websites, cross-platform apps, security audits, and ongoing support.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Timelines depend on the scope. Basic sites may take 1–2 weeks, while full apps or platforms may take 4–8 weeks or more.",
  },
  {
    question: "Will my website or app work on all devices?",
    answer:
      "Yes. Everything we build is responsive and optimized for mobile, tablet, and desktop experiences.",
  },
  {
    question: "Why do I need cybersecurity services?",
    answer:
      "Cybersecurity protects your business from data breaches, legal issues, and reputation damage. We secure your apps, servers, and infrastructure.",
  },
  {
    question: "What does it cost, and do you offer support?",
    answer:
      "We offer flexible pricing based on features. Yes, we provide ongoing support, maintenance, and security updates post-launch.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <MotionSection
      direction="right"
      delay={0.2}
      className="mt-20 py-10 sm:py-14 lg:py-18   bg-[#193d3d] "
    >
      <div className=" px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl"></div>
        <div className="max-w-[400px] ">
          <h2 className="uppercase text-[14px] text-[#C5D8C3] font-bold leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-4xl text-white">
            Answers to common questions about our services and support.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="border border-[#C5D8C3] rounded-xl bg-white/5 backdrop-blur-sm"
              >
                <button
                  className="w-full text-left p-4 text-white font-medium flex justify-between items-center"
                  onClick={() => toggle(index)}
                >
                  <span>{faq.question}</span>
                  <span className="ml-2">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-4 pb-4 text-gray-200">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-gray-500 textbase mt-9">
            Didn’t find the answer you are looking for?{" "}
            <Link
              href="/contact"
              title=""
              className="font-medium text-[#00ffff] transition-all duration-200 hover:text-[#00d4d4] focus:text-[#00d4d4] hover:underline"
            >
              Contact our support
            </Link>
          </p>
        </div>
      </div>
    </MotionSection>
  );
};

export default Faq;
