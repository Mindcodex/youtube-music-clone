"use client"
import React, { useContext } from 'react'
import { MdMenu } from 'react-icons/md'
import { FaChromecast } from 'react-icons/fa'
import { ToggleSidebarContext } from '@/context/ToggleSideBarContext'
import SearchBox from './SearchBox'
import { IoIosSearch } from 'react-icons/io'
const Topbar = () => {
    const closeBar = useContext(ToggleSidebarContext)
    const handleBar = () => {
        if (closeBar.isClosed) closeBar.toggle(false)
        else closeBar.toggle(true)
        console.log(closeBar.isClosed)
    }
    return (
        <header className="h-16 w-full bg-black border-b border-b-[#444] fixed z-10 py-3 sm:p-0 ">
            <img className='w-[80px] h-6 absolute left-[70px] top-5 z-10' src="/ytMusic.svg" alt="" />
            <section className='flex items-center justify-between '>
                <div className='flex w-16 h-full items-center pl-4 mr-4'>
                    <button className="w-10 h-10 hover:bg-white/15 rounded-full flex justify-center items-center" onClick={handleBar}>
                        <MdMenu size={24} />
                    </button>
                </div>
                <div className=" flex sm:py-3 sm:px-[100px] justify-between sm:w-full">
                    <SearchBox/>
                    <div className="flex items-center justify-between space-x-5 pr-4">
                        <span><IoIosSearch size={24} className=" text-gray-400" /></span>
                        <FaChromecast size={24} />
                        <div className="w-[26px] h-[26px] bg-gray-600 rounded-full"></div>
                    </div>
                </div>
            </section>
        </header>
    )
}

export default Topbar