"use client"
import { SongContext } from "@/context/SongContext";
import { playlists, Song, songs } from "@/lib/data";
import { Checkbox } from "./ui/checkbox";
import { useContext, useEffect, useRef, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoPauseSharp, IoPlaySharp } from "react-icons/io5";

type Props = {
    song: Song
    listId: string
}



export const SongListItem = ({song, listId}:Props) => {
    const [listened, setListened] = useState(false)
    const { setCurrentMusic, setIsPlaying, isPlaying, currentMusic } = useContext(SongContext)
    const songList = songs.filter(song => song.albumId == Number(listId))
    const playlist = playlists.filter(playlist => playlist.id == listId)[0]
    const $li = useRef<HTMLLIElement>(null)
    const $ul = $li.current?.parentElement?.children
    const songId = currentMusic.song?.id

    useEffect(()=>{
        if(!isPlaying) setListened(false)
        
    },[isPlaying])
    const handleClick = (e: any) => {
        const id = e.currentTarget.nextSibling.textContent
        if (id == currentMusic.song?.id) {
            setIsPlaying(!isPlaying)
            setListened(!listened)
            return
        }
        if($ul && id != songId){
            $ul[Number(songId) - 1]?.classList.remove("bg-white/10")
        }
        setCurrentMusic({
            playlist,
            songs: songList,
            song: songList[Number(id) - 1]
        })
        setIsPlaying(true)
        setListened(true)
        $li.current?.classList.add("bg-white/10")
    }

    return (
        <li className="px-4 mb-2 flex items-center justify-between w-full py-2 rounded-lg group " ref={$li} id={song.id + ""} >
            <div className="flex items-center">
                <button className="mr-4 w-12 h-12 justify-center items-center hidden group-hover:flex" onClick={handleClick} >
                    {listened? (<IoPauseSharp size={24} className="" />) : <IoPlaySharp size={24} />}
                </button>
                <span className="mr-4 w-12 h-12 flex justify-center items-center group-hover:hidden">{song.id}</span>
                <section>
                    <h4 className="font-semibold text-sm xl:text-base">{song.title}</h4>
                    <p className="text-sm xl:text-base">838 k reproducciones</p>
                </section>
            </div>
            <div className="flex items-center">
                <div className="hidden gap-x-3 group-hover:flex">
                    <button className='w-9 h-9 flex justify-center items-center rounded-full hover:bg-white/20 '>
                        <AiOutlineLike size={24} className='rotate-180' />
                    </button>
                    <button className='w-9 h-9 flex justify-center items-center rounded-full hover:bg-white/20 '>
                        <AiOutlineLike size={24} />
                    </button>
                    <button className='w-9 h-9 flex justify-center items-center rounded-full hover:bg-white/20 '>
                        <BsThreeDotsVertical size={20} />
                    </button>
                </div>
                <Checkbox id="terms" className="hidden sm:group-hover:block ml-8" />
                <span className="ml-8 text-sm xl:text-base group-hover:hidden" >
                    {song.duration}
                </span>
            </div>
        </li>
    )
} 