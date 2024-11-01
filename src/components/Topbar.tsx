"use client"
import { useContext, useEffect, useState } from 'react'
import { FaChromecast } from 'react-icons/fa'
import { ToggleSidebarContext } from '@/context/ToggleSideBarContext'
import SearchBox from './SearchBox'
import { IoIosSearch } from 'react-icons/io'
import { Hamburger } from './Icons'
const Topbar = () => {
  const closeBar = useContext(ToggleSidebarContext)
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 0);
    console.log(scrollPosition)
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('click', handleScroll);
    };
  }, []);
    const handleBar = () => {
        if (closeBar.isClosed) closeBar.toggle(false)
        else closeBar.toggle(true)
        console.log(closeBar.isClosed)
    }

    return (
        <header className={`h-16 w-full fixed border-b-[#222] z-10 py-3 sm:p-0 transition-colors  ${closeBar.isClosed || isScrolled? 'bg-black border-b ' :  'bg-transparent'} `}>
            <img className='w-[80px] h-6 absolute left-[70px] top-5 z-10' src="/ytMusic.svg" alt="" />
            <section className='flex items-center justify-between '>
                <div className='flex w-16 h-full items-center pl-4 mr-4'>
                    <button className="w-10 h-10 hover:bg-white/15 rounded-full flex justify-center items-center" onClick={handleBar}>
                        <Hamburger className='w-6 h-6'/>
                    </button>
                </div>
                <div className=" flex sm:py-3 sm:px-[100px] justify-between sm:w-full">
                    <SearchBox/>
                    <div className="flex items-center justify-between space-x-5 pr-4">
                        <span><IoIosSearch size={24} className=" text-gray-400 md:hidden" /></span>
                        <FaChromecast size={24} />
                        <div className="w-[26px] h-[26px] bg-gray-600 rounded-full">
                            <img src="/profile.jpg" alt="profile" className='rounded-full w-[26px] h-[26px]' />
                        </div>
                    </div>
                </div>
            </section>
        </header>
    )
}

export default Topbar