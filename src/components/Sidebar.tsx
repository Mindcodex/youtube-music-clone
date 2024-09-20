"use client"
import { useContext, useState } from 'react'
import { Nav } from './Nav'
import { Button } from './ui/button'
import { MdMenu } from "react-icons/md";
import { ToggleSidebarContext } from '@/context/ToggleSideBarContext';



const Sidebar = () => {
  const closeBar = useContext(ToggleSidebarContext)
  
  const setWidth = closeBar.isClosed ? "w-[240px] bg-black border-r bg-black" : "w-[72px] items-center"
  const setVisibity = closeBar.isClosed ? "block" : "hidden"
  

  return (
    <aside className={setWidth + ` border-r-[#444] px-2 pt-2 hidden sm:block h-full fixed z-10 top-[64px]`}>
      <Nav sidebarIsClosed={closeBar.isClosed} />
      <Button className={setVisibity + " mt-4 w-full"} variant="secondary">
        {/* <Plus className="w-4 h-4 mr-2" /> Nueva playlist */}
      </Button>
      <div className={"mt-auto text-sm text-gray-400 " + setVisibity}>
        <p>Música que te gustó</p>
        <p>Playlist autogenerada</p>
      </div>
    </aside>
  )
}

export default Sidebar