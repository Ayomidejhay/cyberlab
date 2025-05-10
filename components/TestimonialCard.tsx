import React from 'react';
import { Quote } from 'lucide-react';
//import { basePositions, transitionStyles } from '../utils/testimonialAnimations';
import { basePositions, transitionStyles } from '@/lib/testimonialAnimation';

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  position: 'front' | 'middle' | 'back';
  isTransitioning: boolean;
  direction: 'next' | 'prev' | null;
}

export function TestimonialCard({ 
  testimonial, 
  position, 
  isTransitioning, 
  direction 
}: TestimonialCardProps) {
  const getStyles = () => {
    const styles = isTransitioning && direction 
      ? transitionStyles[direction][position] 
      : basePositions[position];

    return {
      transform: styles.transform,
      opacity: styles.opacity,
      zIndex: styles.zIndex
    };
  };

  return (
    <div
      className="absolute w-full max-w-2xl transition-all duration-500 ease-in-out"
      style={getStyles()}
    >
      <div className="bg-white rounded-xl shadow-xl p-8">
        <Quote className="text-[#00ffff] w-10 h-10 mb-4" />
        <p className="text-gray-700 text-lg mb-6">{testimonial.content}</p>
        <div className="flex items-center gap-4">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
            <p className="text-gray-600 text-sm">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}