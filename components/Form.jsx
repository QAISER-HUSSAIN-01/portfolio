import React, { useState } from 'react'
import {Bruno_Ace_SC} from 'next/font/google'

const bruno = Bruno_Ace_SC({weight:['400'],subsets:['latin']});

export default function Form() {
    const [user, setUser] = useState({ name: '', email: '', message: '' })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        setUser({ name: '', email: '', message: '' })
    }
    return (
        <div id='contact' className='mt-40 mb-40 w-full h-4/6 flex justify-center items-center flex-col gap-4'>
            <h4 className={`text-2xl ${bruno.className}`}>Contact Me</h4>
            <form onSubmit={handleSubmit} className='border p-5 rounded-md flex flex-col gap-4 xs:w-full sm:w-4/6 md:w-4/6 lg:w-3/6'>
                <div className='flex flex-col'>
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        name='name'
                        value={user.name}
                        onChange={handleChange}
                        className='border-2 rounded p-2 outline-none focus:border-blue-600'
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="name">Email</label>
                    <input
                        type="email"
                        name='email'
                        value={user.email}
                        onChange={handleChange}
                        className='border-2 rounded p-2 outline-none focus:border-blue-600'
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="name">Message</label>
                    <textarea
                        type=""
                        name='message'
                        value={user.message}
                        onChange={handleChange}
                        className='border-2 rounded p-2 outline-none focus:border-blue-600'
                    />
                </div>

                <button 
                type='submit' 
                className='rounded bg-blue-600 text-white w-full py-2'
                >Send</button>
            </form>
        </div>
    )
}
