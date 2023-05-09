import { Bruno_Ace_SC } from 'next/font/google';
import Image from 'next/image'
import React from 'react'

const bruno = Bruno_Ace_SC({ weight: ['400'], subsets: ['latin-ext'] });

export default function Portfolio() {
  return (
    <div id='portfolio' className='w-full'>
      <div className='pt-32'>
        <h1 className={`text-center text-2xl ${bruno.className}`}>Portfolio</h1>
        <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
          <div className='border h-[300px] relative rounded-md'>
            <a href="https://exercise-tracker-three-psi.vercel.app/" className='h-full w-full relative'>
              <Image
                src={'/one.png'}
                alt='project image'
                width={500} height={800}
                quality={100}
                className='h-full w-full object-fill rounded-md'
              />
            </a>
          </div>
          
        </div>
      </div>
    </div>)
}
