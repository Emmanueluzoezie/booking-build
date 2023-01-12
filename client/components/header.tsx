import Image from 'next/image'
import React, { useState } from 'react'
import logo from "../public/logodark.png"
import { MdSearch, MdMenu, MdOutlineShoppingCart } from "react-icons/md"
import { useContextState } from '../context/context'
import { DateRange } from 'react-date-range';
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { Range } from "react-date-range";
import { useRouter } from 'next/router'

const Header = () => {
    const { sidebar, setSidebar, dateRange, setDateRange, setOpenDate, openDate } = useContextState()
    const router = useRouter()

    const range = dateRange?.[0];
    if (range?.startDate === undefined || range?.endDate === undefined) {
        return <span>Invalid range!</span>}

    return (
        <nav className=''>
            <div className='sticky p-6 flex items-center justify-between'>
                <div className='w-[50px]'>
                    <Image src={logo} alt="logo" />
                </div>
                <div className='flex items-center text-2xl font-semibold space-x-3'>
                    <MdMenu className='cursor-pointer text-3xl' onClick={() => setSidebar(prev => !prev)} />
                    <MdSearch className='cursor-pointer' />
                    <div className='relative'>
                        <MdOutlineShoppingCart className='cursor-pointer' />
                        <span className='absolute top-[-15px] right-0 font-bold text-xl'>0</span>
                    </div>
                    <button className='text-sm font-bold rounded-md bg-blue-500 px-3 py-1 text-white' onClick={() => router.push("/join")}>Join us</button>
                </div>
            </div>
            <div className='p-4 relative '>
                <form className='lg:flex w-full items-center bg-white rounded-xl'>
                    <div className='sm:flex lg:w-[50%]'>
                        <div className='flex-1'>
                            <input placeholder='country/city/place' className='w-full w-inherit p-2 bg-inherit pl-4 sm:pl-0 font-semibold text-[16px]' />
                        </div>
                        <div className='relative'>
                            <div onClick={() => setOpenDate(!openDate)} className="cursor-pointer flex justify-around pr-28 md:pr-0 space-x-4 bg-inherit font-semibold text-[16px]">
                                <h2>{format(range.startDate, "MM/dd/yyyy")}</h2>
                                <h2>To</h2>
                                <h2>{format(range.endDate, "MM/dd/yyyy")}</h2>
                            </div>
                           {openDate && (
                                <DateRange
                                    editableDateInputs={false}
                                    // onChange={handleChange}
                                    onChange={(item: any) => setDateRange([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={dateRange}
                                    className="absolute right-0 z-50"
                                    minDate={new Date()}
                                    showDateDisplay={false}
                                    // showMonthAndYearPickers={false}
                                    showPreview={false}
                                />
                            )}
                        </div>
                    </div>
                        
                    <div className='flex items-center lg:w-[50%]'>
                        <div className='flex-1'>
                            <div className='flex justify-around lg:pl-10 p-2 pt-4' onClick={() => setOpenDate(false)}>
                                <div className='flex items-center space-x-2'>
                                    <h2 className='font-bold'>Children:</h2>
                                    <input className='w-[32px] sm:w-[60px] text-center focus:bg-white text-sm sm:text-lg bg-inherit' placeholder='0'/>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <h2 className='font-bold'>Children:</h2>
                                    <input className='w-[33px] sm:w-[60px] text-center focus:bg-white text-sm sm:text-lg bg-inherit' placeholder='0' />
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <h2 className='font-bold'>Children:</h2>
                                    <input className='w-[32px] sm:w-[60px] text-center focus:bg-white text-sm sm:text-lg bg-inherit' placeholder='0' />
                                </div>
                            </div>
                        {/* <input placeholder='country/city/place' onClick={() => setOpenDate(false)}/> */}
                        </div>
                        {/* <input type="button" className='absolute ' /> */}
                        <button className='absolute top-[53px] right-6 sm:relative sm:top-0 sm:right-0 md:right-0 bg-gray-700 py-1 px-7 md:px-20 sm:py-3 lg:px-10 text-white rounded-md'>Search</button>
                    </div>
                </form>
            </div>
        </nav>
    )
}

export default Header

    // < input placeholder = 'country/city/place' className = 'bg-red-600 w-full p-2' />
    //                 </div >
    // <div>
    //     <div className='block'>
    //         

    //     </div>