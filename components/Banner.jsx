import React from 'react';
import { Bruno_Ace_SC } from 'next/font/google';
import Image from 'next/image';

const bruno = Bruno_Ace_SC({ weight: ['400'], subsets: ['latin'] });

export default function Banner() {
    return (
        <div id='home' className='w-full xs:h-4/6 sm:h-4/6 md:h-4/6 flex'>
            <div className='flex-1 h-full flex items-end'>
                <div>
                    <h1 className={`text-5xl ${bruno.className}`}>Qaiser Hussain</h1>
                    <p className={`text-2xl text-gray-500 mt-3 mb-10 ${bruno.className}`}>I am a Full Stack <span className='tracking-widest'> MERN </span> Developer</p>

                    <a
                        download='Qaiser Resume'
                        href='/resume.pdf'
                        className='px-20 py-2 cursor-pointer rounded bg-blue-600 text-white tracking-wider'
                    >Resume</a>
                </div>
            </div>
            <div className='bg-orange-500 flex-1 rounded-br-3xl rounded-bl-3xl h-full flex items-end xs:hidden sm:hidden md:flex'>
                {/* <Image src='/mine.png' width={300} height={300} className='w-full h-full object-contain' /> */}
            </div>
        </div>
    )
}
