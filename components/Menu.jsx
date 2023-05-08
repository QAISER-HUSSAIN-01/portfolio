import React from 'react'
import { MdMail, MdHome, MdFeed, MdDashboard } from 'react-icons/md'
export default function Menu() {
    return (
        <>
            {/* // <div className='sm:flex-[0.7] md:flex-[0.6] lg:flex-[0.4] justify-around flex '> */}
            <a href="#home">
                <div className='flex flex-col items-center group cursor-pointer'>
                    <span className='text-2xl text-gray-500 group-hover:animate-bounce'><MdHome /></span>
                    <span className='text-sm'>Home</span>
                </div>
            </a>

            <a href="#skills">
                <div className='flex flex-col items-center group cursor-pointer'>
                    <span className='text-2xl text-gray-500 group-hover:animate-bounce'><MdFeed /></span>
                    <span className='text-sm'>Skills</span>
                </div>
            </a>
            
            <a href="#portfolio">
                <div className='flex flex-col items-center group cursor-pointer'>
                    <span className='text-2xl text-gray-500 group-hover:animate-bounce'><MdDashboard /></span>
                    <span className='text-sm'>Portfolio</span>
                </div>
            </a>
           
            <a href="#contact">
                <div className='flex flex-col items-center group cursor-pointer'>
                    <span className='text-2xl text-gray-500 group-hover:animate-bounce'><MdMail /></span>
                    <span className='text-sm'>Contact</span>
                </div>
            </a>
            {/* // </div> */}
        </>
    )
}
