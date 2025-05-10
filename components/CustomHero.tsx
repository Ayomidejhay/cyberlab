import { CustomHeroProps } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Arrow from './Arrow'

const CustomHero = ({title, imageurl, link, header}:CustomHeroProps) => {
  return (
    <div className="flex">
        <div className="w-full h-[300px] relative">
          <Image
            src={imageurl}
            fill
            sizes="100vw"
            alt="about-image"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/80 z-10" />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div>
              <h3 className="uppercase text-center text-4xl font-bold text-[#C5D8C3] mb-4">
                {header}
              </h3>
              <span className="flex gap-2 text-[12px] items-center justify-center">
                <Link href="/">Home</Link>
                <Arrow />
                <Link href={link}>{title}</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CustomHero