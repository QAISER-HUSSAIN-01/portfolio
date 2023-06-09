import React from 'react';
import { Bruno_Ace_SC } from 'next/font/google';
import SkillCard from './SkillCard';
import {skills} from '@/utils/data'

const bruno = Bruno_Ace_SC({ weight: ['400'], subsets: ['latin-ext'] });

export default function Resume() {
  return (
    <div id='skills' className='w-full xs:pt-20 sm:pt-32'>
      <div className=''>
        <h1 className={`text-center text-3xl ${bruno.className}`}>Skills</h1>
        <div className='grid xs:grid-cols-1 sm:grid-cols-2 gap-4 mt-10'>
          {skills.map((item,index)=>(
            <SkillCard key={index} icon={item.icon} name={item.name} />
          )) 
          }
        </div>
      </div>
    </div>
  )
}
