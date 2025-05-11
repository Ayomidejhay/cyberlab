"use client";

import CustomHero from "@/components/CustomHero";
import React from "react";
import { ArrowRight, Github, ChevronLeft } from "lucide-react";
import { getProjects } from "@/lib/data";
import { motion } from "framer-motion";

const page = () => {
  const projects = getProjects();
  return (
    <div>
      <CustomHero
        title="Our Projects"
        imageurl="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800&h=500"
        link="/aboutUs/team"
        header="Check out our projects"
      />
      <section className="my-20 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-10"
        >
          <div className="max-w-[400px] ">
            <h2 className="uppercase text-[14px] text-[#C5D8C3] font-bold leading-tight">
              projects overview
            </h2>
            <p className="text-4xl text-white">
              Here are some of our recent projects that showcase our expertise
              and innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
              viewport={{ once: true, amount: 0.2 }}
                className="rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white"
              >
                <div className="h-60 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-slate-500 mb-2">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between mt-6">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                      >
                        View Demo
                        <ArrowRight size={16} className="ml-1" />
                      </a>
                    )}

                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-slate-600 hover:text-slate-800 transition-colors"
                      >
                        <Github size={18} className="mr-1" />
                        Repository
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default page;
