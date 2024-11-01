"use client"
import { useContext, useEffect, useState } from 'react'
import { Nav } from './Nav'
import { Button } from './ui/button'
import { ToggleSidebarContext } from '@/context/ToggleSideBarContext';
import { Fixed, Play, Plus } from './Icons';
import Link from 'next/link';




const Sidebar = () => {
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
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const setWidth = closeBar.isClosed ? "w-[240px] bg-black border-r bg-black" : "w-[72px] items-center"
  const show = closeBar.isClosed ? "block" : "hidden"


  return (
    <aside className={setWidth + ` px-2 pt-2 hidden sm:block h-full fixed z-10 top-[64px] md:pb-[72px] ${isScrolled || closeBar.isClosed ? ' border-r bg-black border-r-[#222]' : 'bg-transparent'}`}>
      <Nav sidebarIsClosed={closeBar.isClosed} />
      <div className={"px-4 " + show}>
        <div className=' w-full h-[2px] my-6 bg-white/10'> </div>
        <Button className=" w-full rounded-[18px] mb-4 bg-white/10 text-[#f1f1f1] hover:bg-white/20 " >
          <Plus className="w-6 h-6 mr-2 text-" /> Nueva Playlist
        </Button>
      </div>
      <Link href={"/playlist/0"} className={"mt-auto text-sm text-gray-400 flex justify-between items-center group hover:bg-white/15 rounded-[8px] py-2 px-4 " + show} >
        <section>
          <h4 className='font-bold text-sm'>Música que te gustó</h4>
          <h5 className='text-gray-400 text-[12px] flex items-center gap-1'> <span className=' flex items-center gap-1'> <Fixed className='w-3 h-3' /> Playlist autogenerada</span>
          </h5>
        </section>
        <div className='w-6 h-6 bg-white rounded-full hidden justify-center items-center pl-[1px] group-hover:flex'>
          <Play className='w-4 h-4' color='#000'/>
        </div>
      </Link>
    </aside>
  )
}

export default Sidebar