import React from 'react';
import { Bruno_Ace_SC } from 'next/font/google';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiNextdotjs, SiMongodb, SiNodedotjs, } from 'react-icons/si';


const bruno = Bruno_Ace_SC({ weight: ['400'], subsets: ['latin'] });

export default function Banner() {
    return (
        <div id='home' className='w-full xs:h-auto sm:5/6 md:h-5/6 lg:h-4/6 flex xs:flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-row'>
            <div className='flex-1 h-full flex items-end sm:pt-20 lg:pt-0'>
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
            <div className='flex-1 h-full flex items-center'>
                <div className='h-full grid gap-4 grid-cols-2 xs:grid-rows-6 sm:grid-rows-5 w-full'>
                    <div className='rounded-tl-[70px] bg-green-200 flex xs:flex-col sm:flex-row gap-5 justify-center items-center h-full border shadow-lg sm:row-span-3 xs:row-span-3'>
                        <span className='text-5xl text-green-500'><SiMongodb /></span>
                        <span className={`xs:text-lg sm:text-2xl ${bruno.className}`}>MongoDB</span>
                    </div>
                    <div className='py-5 rounded-tr-[70px] bg-red-200 flex sm:gap-5 xs:flex-col sm:flex-row justify-center items-center h-full border shadow-lg sm:row-span-2 xs:row-span-2'>
                        <span className='text-4xl text-red-500'><SiExpress /></span>
                        <span className={`xs:text-lg sm:text-2xl ${bruno.className}`}>Express</span>

                    </div>
                    <div className='rounded-br-[70px] bg-green-400 flex xs:flex-col sm:flex-row gap-5 justify-center items-center h-full border shadow-lg sm:row-span-3 xs:row-span-3'>
                        <span className='text-5xl text-green-700' ><SiNodedotjs /></span>
                        <span className={`xs:text-lg sm:text-2xl ${bruno.className}`}>Node</span>
                    </div>
                    {/* <div className='py-5 rounded-bl-[70px] flex xs:flex-col sm:flex-row sm:gap-5 justify-center items-center h-full border shadow-lg sm:row-span-1 xs:row-span-2 '> */}
                    <div className='py-5 rounded-bl-[70px] bg-blue-200 flex xs:flex-col sm:flex-row sm:gap-5 justify-center items-center h-full border shadow-lg sm:row-span-2 xs:row-span-2 '>
                        <span className='text-4xl text-blue-500'><FaReact /></span>
                        <span className={`xs:text-lg sm:text-2xl ${bruno.className}`}>React</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
