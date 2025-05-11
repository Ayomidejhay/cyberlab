import React from "react";
import AnimatedCard from "./Services";
import MotionSection from "./MotionSection";


export interface Service {
  id: number;
  title: string;
  link: string;
  content: string;
  avatar: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "cybersecurity solutions",
    link: "#",
    content:
      "We offer end-to-end cybersecurity services that safeguard digital assets, ensure compliance, and mitigate threats. Our solutions include network security, endpoint protection, cloud security, data encryption, and incident response — all tailored to protect businesses in an evolving threat landscape.",
    avatar:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/Is_Cybersecurity_Hard_to_Learn.jpg",
  },
  {
    id: 2,
    title: "web app development",
    link: "#",
    content:
      "Our web development team crafts secure, responsive, and dynamic web applications that meet your business needs. Leveraging frameworks like React, Next.js, and Node.js, we ensure robust backends, sleek frontends, and scalable architectures that support your growth.",
    avatar:
      "https://media.istockphoto.com/id/2151904502/photo/closeup-young-man-software-developers-using-computer-to-write-code-application-program-for-ai.jpg?s=1024x1024&w=is&k=20&c=Ni1sxybLm2zNGhH5zhbXnR88JLZG5Xs6Kr4LZwC_m0U=",
  },
  {
    id: 3,
    title: "mobile app development",
    link: "#",
    content:
      "We build intuitive, scalable, and high-performance mobile applications for both Android and iOS platforms. From concept to deployment, our mobile solutions are designed to deliver seamless user experiences and drive customer engagement using modern frameworks like Flutter and React Native.",
    avatar:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "penetration testing",
    link: "#",
    content:
      "We conduct thorough penetration tests to identify and exploit vulnerabilities in your systems before attackers can. Using industry-standard tools and methodologies, we provide detailed assessments and remediation plans to strengthen your security posture.",
    avatar:
      "https://www.impactqa.com/wp-content/uploads/2022/01/Penetration-Blog.jpg",
  },
];

const ServiceOffered = () => {
  return (
    <MotionSection
      direction="up"
      delay={0.2}
      className="py-20  px-4 sm:px-6 lg:px-8"
    >
      <div className=" mx-auto max-w-7xl">
        <div className="">
          <div className="max-w-[400px] text-center mx-auto">
            <h3 className="uppercase text-[14px] text-[#C5D8C3] font-bold my-5">
              Our services
            </h3>
            <p className=" text-white">
              At Degen CyberLabs, we provide cutting-edge cybersecurity and
              software development solutions to help businesses stay secure and
              innovative in the digital world.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid md:grid-cols-2 gap-20 3xl:grid-cols-4 ">
              {services.map((service, index) => (
                <AnimatedCard
                  id={service.id}
                  key={service.id}
                  title={service.title}
                  link={service.link}
                  content={service.content}
                  avatar={service.avatar}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default ServiceOffered;
