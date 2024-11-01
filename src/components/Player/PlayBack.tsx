import React from 'react'
import { usePlayer } from './usePlayer'
import { IoPauseSharp, IoPlaySharp, IoPlaySkipBackSharp, IoPlaySkipForwardSharp } from 'react-icons/io5'
import { formatTime } from '@/utils'
type Props = {
    songTime :[number,number]
} 
export const PlayBack = ({songTime}:Props) => {

    const { backward, forward, play, isPlaying} = usePlayer()
   
    return (
        <>
            <button className='p-2 ml-2 hidden sm:block' onClick={backward}><IoPlaySkipBackSharp size={20} className='text-[#fff]' /></button>
            <button onClick={play} className='p-2 ml-2'>
                {isPlaying ? <IoPauseSharp size={36} className="text-[#fff]" /> : <IoPlaySharp size={36} className='text-[#fff]' />}
            </button>
            <button className='p-2 ml-2' onClick={forward}><IoPlaySkipForwardSharp size={20} className='text-[#fff]' /></button>
            <span className='hidden sm:block ml-2 mr-4 text-[12px] text-[#aaa]'>{formatTime(songTime[0])} / {formatTime(songTime[1])}</span>
        </>
    )
}
