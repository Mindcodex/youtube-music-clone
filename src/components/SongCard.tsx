
import { playlists, songs } from '@/lib/data';
import Link from 'next/link';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoPauseSharp, IoPlaySharp } from 'react-icons/io5';
import { usePlayer } from './Player/usePlayer';
import Image from 'next/image';

type TypeOfContent = "album" | "song" | "video" | "Type";

type Props = {
    id: number
    name: string,
    artists: string[]
    cover: string
    type: TypeOfContent
}

const SongCard = ({ name = "Playlist Name", artists = ["Artist Names"], cover, id, }: Props) => {
    const { currentSong, setCurrentMusic, setIsPlaying, isPlaying } = usePlayer()
    const songList = songs.filter(song => song.albumId == id)
    const playlistIndex: number = currentSong?.albumId ?? 0
    const handleClick = (i: number) => {
        if (playlistIndex - 1 == i) {
            setIsPlaying(!isPlaying)
            return
        }
        setCurrentMusic({
            currentSong: songList[0],
            currentPlaylistMusic: songList,
            currentPlaylistInfo: playlists[i]
        })
        setIsPlaying(true)
    }

    return (
        <article className="flex flex-col w-[160px] relative lg:w-fit">
            <header className="mb-2 md:w-[180px] md:h-[180px] w-[160px] h-[160px] lg:w-[193.33px] lg:h-[193.33px] relative cursor-pointer group">
                <Link href={"/playlist/" + id}>
                    <div className={`absolute w-full h-full justify-center items-center from-black/40 to-transparent ${playlistIndex - 1 == id - 1 ? "bg-gradient-to-b" : " group-hover:bg-gradient-to-b"}`}>
                    </div>
                </Link>
                <div className={`absolute right-2 top-2 hover:bg-white/15 rounded-full p-2 ${playlistIndex - 1 == id - 1 ? "block" : "hidden group-hover:block"}`}>
                    <BsThreeDotsVertical size={16} />
                </div>
                <picture className='rounded-[8px]'>
                    <Image width={193.33} height={193.33} src={cover} alt={`Cover of ${name}`} />
                </picture>
                <button onClick={() => handleClick(id - 1)} className={`absolute right-6 transition-all duration-300 bottom-6 justify-center items-center bg-black/70 p-2 rounded-full hover:bg-black hover:scale-[120%] ${playlistIndex - 1 == id - 1 ? "flex" : " hidden group-hover:flex"}`}>
                    {isPlaying && id - 1 == playlistIndex - 1 ? (<IoPauseSharp size={24} className="" />) : <IoPlaySharp size={24} />}
                </button>
            </header>
            <section>
                <Link href={"/playlist/" + id}>
                    <h3 className="font-semibold w-fit hover:underline">{name}</h3>
                </Link>
                <p className="text-gray-400 text-wrap">Álbum • {artists.join(" ")}</p>
            </section>
        </article>
    )
}

export default SongCard