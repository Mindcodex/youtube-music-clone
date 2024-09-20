"use client"
//@ts-ignore
import ColorThief from "colorthief"
import { BsThreeDotsVertical } from "react-icons/bs";
import { TfiDownload } from "react-icons/tfi";
import { IoPlaySharp } from "react-icons/io5";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { RiShareForwardFill } from "react-icons/ri";
import { AiOutlineLike } from "react-icons/ai";
import { Checkbox } from "../../../components/ui/checkbox";
import { playlists, songs } from "@/lib/data";
import { SongContext } from "@/context/SongContext";
import { useContext, useEffect, useRef, useState, } from "react";
import { BlurBlobs } from "@/components/BlurBlobs";
import { IoPauseSharp } from "react-icons/io5";
import { rgbToHex } from "@/utils";
import { SongListItem } from "@/components/SongListItem";
type Props = {
    params: { list: string }
}
const List = ({ params }: Props) => {
    const [hexColor, setHexColor] = useState("#000")
    const playlist = songs.filter(song => song.albumId == Number(params.list))
    const $img = useRef<HTMLImageElement>(null)
    const $listElement = useRef<HTMLUListElement>(null)
    const { isPlaying } = useContext(SongContext)
   
    useEffect(() => {
        const colorThief = new ColorThief()
        const color = colorThief.getColor($img.current)
        setHexColor(rgbToHex(color[0], color[1], color[2]))
    }, [])
    return <main className="pt-[66px] lg:px-32 xl:px-[160.5px] w-full px-4 h-screen overflow-x-hidden relative">
        <section className="mt-[60px] mx-4 flex flex-col xl:flex-row">
            <div className="flex items-center flex-col mb-20 lx:mb-0">
                <span>{playlist[0].artists[0]}</span>
                <div className="bg-[#444] w-[200px] h-[200px] md:w-[240px] md:h-[240px] xl:w-[264px] xl:h-[264px] rounded-sm mx-[36.5px] my-4">
                    <img src={playlist[0].image} alt={playlist[0].album} ref={$img} className="w-full h-full" />
                </div>
                <BlurBlobs color={hexColor} />
                <h1 className="xl:text-[34px] text-[24px] font-bold w-full text-center">{playlist[0].album}</h1>
                <h6 className="w-full text-center text-white/60 md:text-sm">EP • 2022</h6>
                <p className=" text-white/60 md:text-sm">4 canciones • 12 minutos y 2 segundos</p>
                <div className="flex justify-between items-center mt-4 w-full lg:px-52 xl:px-0">
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
                {playlist.map(data => (
                    <SongListItem listId={params.list} song={data} key={data.title} />
                ))}
            </ul>
        </section>
    </main>
}
export default List;