import React, { useState } from 'react'
import {Bruno_Ace_SC} from 'next/font/google'
import axios from 'axios';

const bruno = Bruno_Ace_SC({weight:['400'],subsets:['latin']});
const url = process.env.NODE_ENV === 'production' ? 'https://qaiser-portfolio-one.vercel.app/':'http://localhost:3000/'
export default function Form() {
    const [loader,setLoader] = useState(false);
    const [error,setError] = useState('');
    const [user, setUser] = useState({ email: '',subject:'', message: '' })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoader(true);
        const {data} = await axios.post(`${url}api/mail`,user);
        if(data.success){
            setUser({ subject: '', email: '', message: '' })
            setLoader(false)
        }else{
            setError(data.message);
            setLoader(false)
        }
        
    }
    return (
        <div id='contact' className='xs:pt-20 sm:pt-32 xs:pb-40 sm:pb-40 w-full flex items-center flex-col gap-4'>
            <h4 className={`text-2xl ${bruno.className}`}>Contact Me</h4>
            <form onSubmit={handleSubmit} className='border p-5 rounded-md flex flex-col gap-4 xs:w-full sm:w-4/6 md:w-4/6 lg:w-3/6'>
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
                    <label htmlFor="name">Subject</label>
                    <input
                        type="text"
                        name='subject'
                        value={user.subject}
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
                >{loader ? 'sending... ':'Send'}</button>
            </form>
        </div>
    )
}
