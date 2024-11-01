"use client"
import { BsThreeDotsVertical } from "react-icons/bs";
import { TfiDownload } from "react-icons/tfi";
import { IoPlaySharp } from "react-icons/io5";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { RiShareForwardFill } from "react-icons/ri";
import { songs } from "@/lib/data";
import { SongContext } from "@/context/SongContext";
import { useContext, useRef, } from "react";
import { BlurBlobs } from "@/components/BlurBlobs";
import { IoPauseSharp } from "react-icons/io5";
import { SongListItem } from "@/components/SongListItem";
interface Props  {
    params: { list: string }
}
const List = ({ params }: Props) => {
    const playlistData = songs.filter(song => song.albumId == Number(params.list))
    const playlist = playlistData[0]
    const $img = useRef<HTMLImageElement>(null)
    const $listElement = useRef<HTMLUListElement>(null)
    const { isPlaying } = useContext(SongContext)

    return <main className="pt-[66px] md:px-32 lg:px-32 xl:px-[160.5px] w-full px-4 h-full relative">
        <BlurBlobs color={""} img={playlist?.image} blur />
        <section className="mt-[60px] sm:pl-[72px] xl:mx-4 flex flex-col xl:flex-row mb-[72px] xl:mb-0">
            <div className="flex items-center flex-col mb-20 lx:mb-0">
                <span>{playlist?.artists[0]}</span>
                <div className="bg-[#444] w-[200px] h-[200px] md:w-[240px] md:h-[240px] xl:w-[264px] xl:h-[264px] rounded-sm mx-[36.5px] my-4">
                    <img src={playlist?.image} alt={playlist?.album} ref={$img} className="w-full h-full" />
                </div>
                <h1 className="xl:text-[34px] text-[24px] font-bold w-full text-center">{playlist?.album}</h1>
                <h6 className="w-full text-center text-white/60 md:text-sm">EP • 2022</h6>
                <p className=" text-white/60 md:text-sm">{playlistData.length} canciones • 12 minutos y 2 segundos</p>
                <div className="flex justify-between items-center mt-4 w-full px-16 sm:px-32 md:px-16 lg:px-52 xl:px-0 ">
                    <button className="rounded-full bg-white/10 w-10 h-10 flex justify-center items-center"><TfiDownload size={16} /></button>
                    <button className="rounded-full bg-white/10 w-10 h-10 flex justify-center items-center "><MdOutlineAddToPhotos size={20} /></button>
                    <button className="rounded-full bg-white flex justify-center items-center h-16 w-16 ">
                        {isPlaying ? (<IoPauseSharp size={32} className="text-black" />) : <IoPlaySharp size={32} className="text-black" />}
                    </button>
                    <button className="rounded-full bg-white/10 w-10 h-10 flex justify-center items-center "><RiShareForwardFill size={20} /></button>
                    <button className="rounded-full bg-white/10 w-10 h-10 flex justify-center items-center "><BsThreeDotsVertical size={20} /></button>
                </div>
            </div>
            <ul ref={$listElement} className="w-full s" >
                {playlistData.map((data, index) => (
                    <SongListItem listId={params.list} song={data} key={data.title} selected={index} />
                ))}
            </ul>
        </section>
    </main>
}
export default List;