import React, { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Testimonial, TestimonialCard } from "./TestimonialCard";

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Designer",
    content:
      "This product has completely transformed how we work. The interface is intuitive and the features are exactly what we needed.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Engineer",
    content:
      "The attention to detail and performance optimization is outstanding. It's rare to find a solution that's both powerful and easy to use.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    content:
      "We've seen a significant increase in productivity since implementing this solution. The ROI has been incredible.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 4,
    name: "David Park",
    role: "UX Researcher",
    content:
      "The user-centric approach and attention to accessibility has made this product stand out. Our users love how inclusive and easy to use it is.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 5,
    name: "Alexandra Foster",
    role: "Tech Lead",
    content:
      "Integration was seamless and the documentation is comprehensive. The support team has been exceptional in addressing our technical questions.",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev" | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const handleTransition = useCallback(
    (newDirection: "next" | "prev") => {
      if (isTransitioning) return;

      setDirection(newDirection);
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentIndex((prev) => {
          if (newDirection === "next") {
            return (prev + 1) % testimonials.length;
          } else {
            return (prev - 1 + testimonials.length) % testimonials.length;
          }
        });

        setTimeout(() => {
          setIsTransitioning(false);
          setDirection(null);
        }, 50);
      }, 500);
    },
    [isTransitioning]
  );

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleTransition("next");
    }, 5000);

    return () => clearInterval(interval);
  }, [handleTransition, isPaused]);

  const getPosition = (index: number): "front" | "middle" | "back" => {
    const diff =
      (index - currentIndex + testimonials.length) % testimonials.length;
    if (diff === 0) return "front";
    if (diff === 1) return "middle";
    return "back";
  };
  return (
    <section className=" py-20 mb-40">
      <div className="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-[400px]">
          <h3 className="uppercase text-[14px] text-[#C5D8C3] font-bold">
            client experiences
          </h3>
          <p className="text-4xl text-white">
            See what our clients have to say about us
          </p>
        </div>

        <div
          className="relative h-[400px] flex items-center justify-center -mt-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative w-full max-w-2xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                position={getPosition(index)}
                isTransitioning={isTransitioning}
                direction={direction}
              />
            ))}
          </div>

          <button
            onClick={() => handleTransition("prev")}
            disabled={isTransitioning}
            className="absolute top-30  left-4 lg:left-20 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={() => handleTransition("next")}
            disabled={isTransitioning}
            className="absolute top-30 right-4 lg:right-20 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
