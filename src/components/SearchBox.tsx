"use client"
import React, { useEffect, useState } from 'react'
import { Input } from './ui/input'
import { IoIosSearch } from 'react-icons/io'

const SearchBox = () => {

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

    return (
        <div className={`hidden sm:flex relative w-[480px] bg-[#606060]/55 rounded-[8px] h-[42px] justify-between items-center border  ${isScrolled? "bg-[#2f2f2f] border-[#555]": "bg-[#606060]/55} border-[#707070]"}`}>
            <button className="py-2 px-4">
                <IoIosSearch size={24} className=" text-[#909090]" />
            </button>
            <Input
                className="w-full pr-[56px] border-none outline-none text-md text-white pl-0 py-0 placeholder:text- focus-visible: "
                placeholder="Buscar canciones, álbumes, artistas o podcasts"
            />
        </div>
    )
}

export default SearchBox