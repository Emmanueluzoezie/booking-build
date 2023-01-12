import Link from 'next/link'
import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'
import { BsPerson } from 'react-icons/bs'
import { GrFavorite } from 'react-icons/gr'

const Footer = () => {
    return (
        <div>Footer
            <div className='fixed bottom-0 md:hidden'>
                <div className='fixed bottom-0 bg-white shadow-2xl w-full md:hidden'>
                    <div className='flex p-4 text-2xl justify-around'>
                        <Link href="/" className='cursor-pointer text-black'>
                            <AiOutlineHome />
                        </Link>
                        <Link href="/favorite" className='cursor-pointer text-black'>
                            <GrFavorite />
                        </Link>
                        <Link href="/settings" className='cursor-pointer text-black'>
                            <BsPerson />
                        </Link>
                        <Link href="/profile" className='cursor-pointer text-black'>
                            <FiSettings className='' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer