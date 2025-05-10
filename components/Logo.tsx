import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex gap-3 items-center'>
        <div>
        <Image src='/1.png' alt='logo' width={40} height={40}/>
        </div>
        <div className='flex flex-col gap-0 text-[#ebf5ea]'>
        <p className='text-2xl font-bold'>Dexteer</p>
        <p className='font-light -mt-3.5'>cyberlab</p>
        </div>
    </div>
  )
}

export default Logo