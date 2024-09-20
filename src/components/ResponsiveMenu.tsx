"use client"
import React, { useContext } from 'react'
import { Nav } from './Nav'
import { Button } from './ui/button'
import { ToggleSidebarContext } from '@/context/ToggleSideBarContext'
import { RxCross1 } from "react-icons/rx";

const ResponsiveMenu = () => {
    const closeBar = useContext(ToggleSidebarContext)
    const showSidebar = closeBar.isClosed ? "translate-x-0" : "-translate-x-64" 
    const setWidth = closeBar.isClosed ? "w-[240px] bg-black border-r bg-black" : "w-[72px] items-center"
    const setVisibity = closeBar.isClosed ? "block" : "hidden"
    return (
        <section className={'block sm:hidden fixed z-10 h-full bg-black w-[240px] transition-transform duration-300 ' + showSidebar}>
            <div className='flex pl-4 mt-1 w-[224px] h-12 space-x-3 items-center'>
                <button className='hover:bg-white/15 rounded-full p-2' onClick={()=> closeBar.toggle(false)}> <RxCross1 size={20} /></button>
                <img className='w-[80px] h-6 left-[70px] top-5 z-10' src="/ytMusic.svg" alt="youtube music logo" />
            </div>
            <Nav sidebarIsClosed={true} />
            <Button className={ "mt-4 w-full"} variant="secondary">
                {/* <Plus className="w-4 h-4 mr-2" /> Nueva playlist */}
            </Button>
            <div className={"mt-auto text-sm text-gray-400 " + setVisibity}>
                <p>Música que te gustó</p>
                <p>Playlist autogenerada</p>
            </div>
        </section>

    )
}

export default ResponsiveMenu