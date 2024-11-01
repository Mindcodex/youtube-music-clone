import React from 'react'
import { usePlayer } from './usePlayer'

const SongInfo = () => {
    const { currentPlaylistInfo, currentSong } = usePlayer()
    return (
        <>
            <div className='w-10 h-10 rounded-[2px] bg-[#909090]'>
                <img src={currentPlaylistInfo?.cover} alt={currentPlaylistInfo?.title} />
            </div>
            <section className='ml-4 mr-2 text-[12px] sm:text-base'>
                <h4>{currentSong?.title}</h4>
                <h5 className='text-[#909090]'>{currentSong?.artists[0]} <span className='hidden sm:inline'>• {currentPlaylistInfo?.title} • 2024</span></h5>
            </section>
        </>
    )
}

export default SongInfo