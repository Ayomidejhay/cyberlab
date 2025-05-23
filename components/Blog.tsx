import React from "react";
import { motion } from "framer-motion";
import MotionSection from "./MotionSection";
import Link from "next/link";

const Blog = () => {
  return (
    <MotionSection
      direction="left"
      delay={0.2}
      className=" py-10 bg-white sm:py-16 lg:py-24"
    >
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Latest from blog
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </p>
        </div>

        <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link href="#" title="" className="block aspect-w-4 aspect-h-3">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800&h=500"
                alt=""
              />
            </Link>
            <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100 mt-9">
              {" "}
              Technology{" "}
            </span>
            <p className="mt-6 text-xl font-semibold">
              <a href="#" title="" className="text-black">
                {" "}
                How to mange your remote team?{" "}
              </a>
            </p>
            <p className="mt-4 text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
            <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
              {" "}
              Martin Jones . June 12, 2021{" "}
            </span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}>
            <Link href="#" title="" className="block aspect-w-4 aspect-h-3">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800&h=500"
                alt=""
              />
            </Link>
            <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9">
              {" "}
              Marketing{" "}
            </span>
            <p className="mt-6 text-xl font-semibold">
              <a href="#" title="" className="text-black">
                {" "}
                6 Product launching emails you want to use on next campaign.{" "}
              </a>
            </p>
            <p className="mt-4 text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
            <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
              {" "}
              Martin Jones . June 12, 2021{" "}
            </span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              viewport={{ once: true }}>
            <Link href="#" title="" className="block aspect-w-4 aspect-h-3">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1522071901873-411886a10004?auto=format&fit=crop&q=80&w=800&h=500"
                alt=""
              />
            </Link>
            <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9">
              {" "}
              Marketing{" "}
            </span>
            <p className="mt-6 text-xl font-semibold">
              <a href="#" title="" className="text-black">
                {" "}
                Learn from the best: 7 email marketing ideas you can use{" "}
              </a>
            </p>
            <p className="mt-4 text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
            <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
              {" "}
              Martin Jones . June 12, 2021{" "}
            </span>
          </motion.div>
        </div>
      </div>
    </MotionSection>
  );
};

export default Blog;
