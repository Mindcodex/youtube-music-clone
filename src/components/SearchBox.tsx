import React from 'react'
import { Input } from './ui/input'
import { IoIosSearch } from 'react-icons/io'

const SearchBox = () => {
    return (
        <div className="hidden sm:flex relative w-[480px] bg-white/15 rounded-[8px] h-[42px] justify-between items-center border border-[#444] ">
            <button className="py-2 px-4">
                <IoIosSearch size={24} className=" text-gray-400" />
            </button>
            <Input
                className="w-full pr-[56px] border-none text-white pl-0 py-0 "
                placeholder="Buscar canciones, álbumes, artistas o podcasts"
            />
        </div>
    )
}

export default SearchBox