import Link from 'next/link';
import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoPlaySharp } from 'react-icons/io5';
type TypeOfContent = "album" | "song" | "video" | "Type";

type Props = {
    id: string
    name: string,
    artists: string[]
    cover: string
    type: TypeOfContent
}

const SongCard = ({ name = "Playlist Name", artists = ["Artist Names"], type = "Type", cover, id }: Props) => {
    return (
        <div className="rounded-lg flex flex-col ">
            <div className="mb-2 rounded md:w-[180px] md:h-[180px] w-[160px] h-[160px] lg:w-[172.33px] lg:h-[172.33px] relative cursor-pointer">
                <div className="absolute w-full h-full bg-black/70 transition-opacity opacity-0 hover:opacity-100 flex justify-center items-center ">
                    <div className='absolute right-2 top-2 hover:bg-white/15 rounded-full p-2'>
                        <BsThreeDotsVertical size={16}  />
                    </div>
                    <IoPlaySharp size={36} />
                </div>
                <img src={cover} alt={name} />
            </div>
            <Link href={"/playlist/" + id}>
            <h3 className="font-semibold w-fit">{name}</h3>
            </Link>
            <p className="text-gray-400 w-fit">{"Álbum"} • {artists.join(" ")}</p>
        </div>
    )
}

export default SongCard