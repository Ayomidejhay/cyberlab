"use client";

import CustomHero from "@/components/CustomHero";
import Link from "next/link";
import React from "react";
import { getBlogPosts } from "@/lib/data";



const page = () => {
  const blogPosts = getBlogPosts();
  return (
    <div>
      <CustomHero
        title="Our Blog"
        imageurl="/blog.jpg"
        link="/blog"
        header="Welcome to Our Blog"
      />
      <section className="my-20 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10">
            <div className="max-w-[400px] ">
                <h2 className="uppercase text-[14px] text-[#C5D8C3] font-bold leading-tight">
                Latest Articles
                </h2>
                <p className="text-4xl text-white">
                Insights and Innovations in Technology
                </p>
            </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src =
                          "https://ui-avatars.com/api/?name=" +
                          encodeURIComponent(post.author.name);
                      }}
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">{post.author.name}</p>
                    
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-slate-600 mb-4">{post.excerpt}</p>

                <div className="flex justify-between items-center mt-4 text-sm text-slate-500">
                  <span>{post.date}</span>
                  
                  <span>{post.category}</span>
                </div>

                <Link
                  href={`/blog/${post.id}`}
                  className="mt-4 inline-block text-[#00ffff] hover:text-[#00d4d4] font-medium transition-colors"
                >
                  Read Article
                </Link>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>
    </div>
  );
};

export default page;
