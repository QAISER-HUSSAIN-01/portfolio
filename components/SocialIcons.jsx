import React from 'react'
import {FaWhatsapp,FaLinkedinIn,FaGithub} from 'react-icons/fa'
export default function SocialIcons() {
  return (
    <div className='flex gap-5'>
        {/* <span className='hover:animate-bounce text-green-500 cursor-pointer text-2xl'><FaWhatsapp /></span> */}
       <a href="https://www.linkedin.com/in/qaiser-hussain-4966b31b5"><span className='hover:animate-bounce text-blue-500 cursor-pointer text-2xl'><FaLinkedinIn/></span></a> 
       <a href="https://github.com/QAISER-HUSSAIN-01"><span className='hover:animate-bounce text-black-700 cursor-pointer text-2xl'><FaGithub/></span></a>
    </div>
  )
}
