import React from 'react';
import { Bruno_Ace_SC } from 'next/font/google';
import SkillCard from './SkillCard';
import {skills} from '@/utils/data'

const bruno = Bruno_Ace_SC({ weight: ['400'], subsets: ['latin-ext'] });

export default function Resume() {
  return (
    <div id='skills' className='w-full sm:mb-20 xs:mb-0'>
      <div className='pt-32'>
        <h1 className={`text-center text-3xl ${bruno.className}`}>Skills</h1>
        <div className='grid xs:grid-cols-1 sm:grid-cols-2 gap-4 mt-20'>
          {skills.map((item,index)=>(
            <SkillCard key={index} icon={item.icon} name={item.name} />
          )) 
          }
        </div>
      </div>
    </div>
  )
}
