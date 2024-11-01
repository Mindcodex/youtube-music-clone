import { SongContext } from '@/context/SongContext'
import { autogeneratePlaylistSongs, Song, songs } from '@/lib/data'
import { useContext, useEffect } from 'react'
import { AiFillLike, AiOutlineLike } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
type Props = {
    songInfo?: Song
}
const FeedBackActions = ({ songInfo }: Props) => {
    const { isDisliked, isLiked, setIsDisliked, setIsLiked, setPlaylistMusic} = useContext(SongContext)
    useEffect(() => {
        if (isLiked && songInfo) {
            autogeneratePlaylistSongs.unshift({...songInfo, albumId: 7})
            setPlaylistMusic([...autogeneratePlaylistSongs,...songs])
        }
        else {
            const songIndex = autogeneratePlaylistSongs.findIndex((song) => song.id == songInfo?.id)
            console.log(songIndex)
            // const likedSongs = autogeneratePlaylistSongs.splice(songIndex, 1)
            
        }
    }, [isLiked])
    const handleIsLikedClick = () => {
        if (isDisliked) {
            setIsLiked(true)
            setIsDisliked(false)
        } else setIsLiked(!isLiked)
    }
    const handleIsDislikedClick = () => {
        if (isLiked) {
            setIsDisliked(true)
            setIsLiked(false)
        } else setIsDisliked(!isDisliked)
        console.log(isDisliked)
    }


    return (
        <div className='hidden sm:flex items-center space-x-2 '>
            <button onClick={handleIsDislikedClick} className='w-9 h-9 flex justify-center items-center  sm:hidden md:flex  '>
                {isDisliked ? <AiFillLike size={24} className='rotate-180' /> : <AiOutlineLike size={24} className='rotate-180 text-[#909090]' />}
            </button>
            <button onClick={handleIsLikedClick} className='w-9 h-9 flex justify-center items-center  sm:hidden md:flex '>
                {isLiked ? <AiFillLike size={24} /> : <AiOutlineLike size={24} className="text-[#909090]" />}
            </button>
            <button className='w-9 h-9 flex justify-center items-center text-[#909090]'>
                <BsThreeDotsVertical size={20} />
            </button>
        </div>
    )
}

export { FeedBackActions }