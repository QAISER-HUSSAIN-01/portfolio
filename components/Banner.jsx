import React from 'react';
import { Bruno_Ace_SC} from 'next/font/google';
import Image from 'next/image';

const bruno = Bruno_Ace_SC({ weight: ['400'], subsets: ['latin'] });

export default function Banner() {
    return (
        <div id='home' className='w-full xs:h-4/6 sm:h-4/6 md:h-4/6 flex'>
            <div className='flex-1 h-full flex items-end'>
                <div>
                    <h1 className={`text-5xl ${bruno.className}`}>Qaiser Hussain</h1>
                    <p className={`text-2xl mt-3 ${bruno.className}`}>I am a Full Stack <span className='tracking-widest'> MERN </span> Developer</p>
                    {/* <p className='text-gray-500 text-justify pr-20 mt-3'>A dedicated and enthusiastic MERN stack developer with experience building responsive web applications.
                        Proficient in creating web applications using MongoDB, Express.js,
                        React.js, Next.js, and Node.js. Passionate about developing user-friendly
                        applications that meet business requirements. Strong problem-solving skills
                        with a keen eye for detail and a passion for learning</p> */}
                    <button className='p-2 w-52 rounded mt-10 bg-blue-600 text-white tracking-wider'>Resume</button>
                </div>
            </div>
            <div className='flex-1 h-full flex items-end xs:hidden sm:hidden md:flex'>
                <Image src='/banner.jpg' width={600} height={600} />
            </div>
        </div>
    )
}
