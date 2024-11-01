"use client"
import { SongContext } from "@/context/SongContext";
import { playlists, Song, } from "@/lib/data";
import { Checkbox } from "./ui/checkbox";
import { useContext} from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoPauseSharp, IoPlaySharp } from "react-icons/io5";

type Props = {
    song: Song
    listId: string
    selected:number
}



export const SongListItem = ({song, listId, selected}:Props) => {
    const { setCurrentMusic, setIsPlaying, isPlaying, currentMusic, playlistMusic } = useContext(SongContext)
    const {currentPlaylistInfo, currentSong} = currentMusic
    const songList = playlistMusic?.filter(song => song.albumId == Number(listId))
    const songIndex: number = currentSong?.id ?? 0 

    const handleClick = (i: number) => {
       
        if ( songIndex - 1 == i && currentPlaylistInfo?.albumId == Number(listId)) {
            setIsPlaying(!isPlaying)
            return
        }
        setCurrentMusic({
            currentSong: songList[i],
            currentPlaylistMusic: songList,
            currentPlaylistInfo: playlists[Number(listId) - 1]
        })
        setIsPlaying(true)  
    }

    return (
        <li className={`xl:px-4 mb-2 flex items-center justify-between w-full py-2 rounded-[8px] group ${ selected == songIndex - 1 && currentPlaylistInfo?.albumId == Number(listId) ? "bg-white/10" : ""} ` }  >
            <div className="flex items-center">
                <button className="mr-4 w-12 h-12 justify-center items-center hidden group-hover:flex" onClick={()=>handleClick(selected)} >
                    {isPlaying && selected == songIndex - 1 && currentPlaylistInfo?.albumId == Number(listId)? (<IoPauseSharp size={24} className="" />) : <IoPlaySharp size={24} />}
                </button>
                <span className="mr-4 w-12 h-12 flex justify-center items-center group-hover:hidden">{selected + 1}</span>
                <section>
                    <h4 className="font-semibold text-sm xl:text-base">{song.title}</h4>
                    <p className="text-sm xl:text-base">838 k reproducciones</p>
                </section>
            </div>
            <div className="flex items-center">
                <div className="hidden gap-x-3 group-hover:flex">
                    <button className='w-9 h-9 hidden xl:flex justify-center items-center rounded-full hover:bg-white/20 '>
                        <AiOutlineLike size={24} className='rotate-180' />
                    </button>
                    <button className='w-9 h-9 hidden xl:flex justify-center items-center rounded-full hover:bg-white/20 '>
                        <AiOutlineLike size={24} />
                    </button>
                    <button className='w-9 h-9 flex justify-center items-center rounded-full hover:bg-white/20 '>
                        <BsThreeDotsVertical size={20} />
                    </button>
                </div>
                <Checkbox id="terms" className="hidden group-hover:block ml-8 mr-4 xl:mr-0" />
                <span className="ml-8 mr-4 xl:mr-0 text-sm xl:text-base group-hover:hidden" >
                    {song.duration}
                </span>
            </div>
        </li>
    )
} 