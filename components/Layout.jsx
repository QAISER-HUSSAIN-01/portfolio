import React from 'react';
import Header from './Header';
import Menu from './Menu';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {
    return (
        <div className={`min-h-screen ${inter.className}`}>
            <Header />
            {children}
            <div className='py-2 xs:flex sm:hidden sm:flex-[0.7] md:flex-[0.6] lg:flex-[0.4] justify-around flex fixed bottom-0 left-0 right-0 bg-white border-t'>
                <Menu />
            </div>
        </div>
    )
}
