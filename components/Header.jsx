import React from 'react'
import SocialIcons from './SocialIcons'
import Logo from './Logo'
import Menu from './Menu'

export default function Header() {
  return (
    <div className='z-50 bg-white fixed left-0 right-0 top-0 xs:py-4 sm:py-5 xs:px-5 sm:px-10 md:px-20 '>
    <div className=' flex justify-between items-center'>
        <SocialIcons />
        <div className='xs:hidden sm:flex md:flex lg:flex sm:flex-[0.7] md:flex-[0.6] lg:flex-[0.4] justify-around flex'>
        <Menu />
        </div>
        <Logo />
    </div>
    </div>
  )
}
