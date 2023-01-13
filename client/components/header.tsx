import Image from 'next/image'
import React, { useState } from 'react'
import logo from "../public/logodark.png"
import { MdSearch, MdMenu, MdOutlineShoppingCart } from "react-icons/md"
import { useContextState } from '../context/context'
import { useRouter } from 'next/router'

const Header = () => {
    const { sidebar, setSidebar, setSearch } = useContextState()
    const router = useRouter()

    return (
        <nav className='py-2 px-0'>
            <div className='flex items-center justify-between'>
                <div className='w-[50px] cursor-pointer' onClick={() => router.push("/")}>
                    <Image src={logo} alt="logo" />
                </div>
                <div className='flex items-center text-2xl font-semibold space-x-3'>
                    <MdMenu className='cursor-pointer text-3xl' onClick={() => setSidebar(prev => !prev)} />
                    <MdSearch className='cursor-pointer' onClick={() => setSearch(prev => !prev)} />
                    <div className='relative'>
                        <MdOutlineShoppingCart className='cursor-pointer' />
                        <span className='absolute top-[-15px] right-0 font-bold text-xl'>0</span>
                    </div>
                    <button className='text-sm font-bold rounded-md bg-blue-500 px-3 py-1 text-white' onClick={() => router.push("/join")}>Join us</button>
                </div>
            </div>
            
        </nav>
    )
}

export default Header