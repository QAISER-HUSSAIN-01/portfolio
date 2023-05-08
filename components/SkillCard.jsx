import React from 'react'


export default function SkillCard({icon,name}) {
    return (
        <div className='shadow rounded shadow-gray-600 flex items-center p-2 gap-5 border-b-[6px] border-blue-600'>
            <span className='text-3xl text-blue-600'> {icon} </span>
            <span className={`text-2xl`}> {name} </span>
        </div>
    )
}
