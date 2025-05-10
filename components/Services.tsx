import React from 'react'
import { Service } from './ServiceOffered';
import Link from 'next/link';



const AnimatedCard = ({title, content, link, avatar}:Service) => {
  return (
    <div className='flex justify-center'>
        <div className="group [perspective:1000px] w-full  sm:w-[80%] md:w-[60%] h-[350px]">
            <div
                className="relative w-full h-full transition-transform duration-[600ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Side */}
                <div className="absolute w-full h-full backface-hidden [backface-visibility:hidden]">
                    <img
                        src={avatar}
                        alt="animated_card"
                        className="w-full h-full cursor-pointer object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 bg-black opacity-65 rounded-lg"></div>
                    <h2 className="text-[1.5rem] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)] font-bold z-10 text-white absolute bottom-5 left-5 uppercase">
                        {title}
                    </h2>
                </div>

                {/* Back Side */}
                <div
                    className="absolute w-full h-full bg-white rounded-lg shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] p-[25px]">
                    <h2 className="text-[1.2rem] font-semibold text-gray-800 mb-4 uppercase">
                        {title}
                    </h2>
                    <p className="text-gray-600">
                        {content}
                    </p>
                    <Link
                        href={link}
                        className="inline-block mt-4 text-blue-500 hover:underline"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AnimatedCard;