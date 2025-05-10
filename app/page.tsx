'use client';

import Image from "next/image";
import Logo from "../components/Logo";
import Hero from "../components/Hero";
import Service from "../components/Service";
import Approach from "../components/Approach";
import TestimonialSection from "../components/Testimonial";
import Services from "../components/Services";
import AnimatedCard from "../components/Services";
import ServiceOffered from "../components/ServiceOffered";
import Team from "../components/Team";
import LinkedInBadge from "../components/LinkedInBadge";
import About from "../components/About";
import Faq from "../components/Faq";
import Clients from "../components/Clients";
import Blog from "../components/Blog";



export default function Home() {
  return (
    <div className="max-w-[1500px] overflow-x-hidden  mx-auto  mt-5">
      <Hero />
      <About />
      <Approach />
      <ServiceOffered />
      <Clients />
      <TestimonialSection />
      <Faq />
      <Blog />
    </div>
  );
}
