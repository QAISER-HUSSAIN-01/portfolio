import React from 'react'
import {Bruno_Ace_SC} from 'next/font/google'

const bruno = Bruno_Ace_SC({weight:['400'],subsets:['latin']});

export default function Logo() {

  return (
    <div className='relative'>
        <span className={`${bruno.className} text-2xl tracking-[3px]`}>MERN</span>
        <span className='absolute -bottom-3 right-1 text-sm tracking-wide'>Developer</span>
    </div>
  )
}
