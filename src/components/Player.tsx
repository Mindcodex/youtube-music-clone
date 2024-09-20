"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import { IoPauseSharp, IoPlaySharp, IoPlaySkipBackSharp, IoPlaySkipForwardSharp } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiVolumeFull, BiVolumeMute } from "react-icons/bi";
import { RiRepeatLine } from "react-icons/ri";
import { Slider } from './Slider';
import { SongContext } from '@/context/SongContext';




const Player = () => {
    const [currentTime, setCurrentTime] = useState(0)
    const audioRef = useRef<HTMLAudioElement>(null)
    const {currentMusic, isPlaying, setIsPlaying} = useContext(SongContext)
    const { song, playlist, songs } = currentMusic

    const play = () =>{
      setIsPlaying(!isPlaying)
    }
    useEffect(()=>{
        isPlaying? 
        audioRef.current?.play():
        audioRef.current?.pause()    
    },[isPlaying])
    
    useEffect(()=>{
        if (song && audioRef.current && isPlaying) {
          const src = `/music/${playlist?.id}/0${song.id}.mp3`
          audioRef.current.src = src
         //   audioRef.current.volume = volume
          audioRef.current.play()
          
        }
    },[currentMusic])
    useEffect(() => {
        if (audioRef) audioRef?.current?.addEventListener('timeupdate', handleTimeUpdate)

        return () => {
            if (audioRef) audioRef.current?.removeEventListener('timeupdate', handleTimeUpdate)
        }
    }, [])

    const handleTimeUpdate = () => {
        if (audioRef) setCurrentTime(audioRef.current?.currentTime ?? 0)
    }

    const formatTime = (time: number) => {
        if (time == null) return `0:00`

        const seconds = Math.floor(time % 60)
        const minutes = Math.floor(time / 60)

        return `${minutes}:${seconds.toString().padStart(2, '0')}`
    }

    const duration = audioRef?.current?.duration ?? 0

    return (
        <div className='w-full h-[72px] flex justify-between bg-[#212121] fixed bottom-0 z-10  sm:px-0'>
            <Slider
                value={[currentTime]}
                max={audioRef?.current?.duration ?? 0}
                min={0}
                onValueChange={(value) => {
                    const [newCurrentTime] = value
                    if (audioRef.current) audioRef.current.currentTime = newCurrentTime 
                }} className='w-full absolute ' />

            <audio ref={audioRef} />
            <div className='h-full flex justify-center items-center order-2 sm:-order-1 px-4 sm:px-0'>
                <button className='p-2 ml-2 hidden sm:block'><IoPlaySkipBackSharp size={20} className='text-[#909090]' /></button>
                <button onClick={play} className='p-2 ml-2'>
                   {isPlaying? <IoPauseSharp size={24} className="text-[#909090]"/>: <IoPlaySharp size={36} className='text-[#909090]' />} 
                </button>
                <button className='p-2 ml-2'><IoPlaySkipForwardSharp size={20} className='text-[#909090]' /></button>
                <span className='hidden sm:block ml-2 mr-4 text-[12px] text-[#aaa]'>{formatTime(currentTime)?? "0:00"} / {formatTime(duration)?? "0:00"}</span>
            </div>
            <div className='flex h-full justify-center items-center px-4 sm:px-0'>
                <div className='w-10 h-10 rounded-[2px] bg-[#909090]'>
                    <img src={playlist?.cover} alt={playlist?.title} />
                </div>
                <section className='ml-4 mr-2 text-[12px] sm:text-base'>
                    <h4>{song?.title}</h4>
                    <h5 className='text-[#909090]'>{song?.artists[0]} <span className='hidden sm:inline'>• {playlist?.title} • 2016</span></h5>
                </section>
                <div className='hidden sm:flex items-center space-x-2 '>
                    <button className='w-9 h-9 flex justify-center items-center text-[#909090]'>
                        <AiOutlineLike size={24} className='rotate-180' />
                    </button>
                    <button className='w-9 h-9 flex justify-center items-center text-[#909090]'>
                        <AiOutlineLike size={24} />
                    </button>
                    <button className='w-9 h-9 flex justify-center items-center text-[#909090]'>
                        <BsThreeDotsVertical size={20} />
                    </button>
                </div>
            </div>
            <div className='h-full hidden sm:flex justify-center items-center mr-1'>
                <button className='p-2 ml-2'><BiVolumeFull size={20} className='text-[#909090]/70' /></button>
                <button className='p-2 ml-2'><RiRepeatLine size={20} className='text-[#909090]/70' /></button>
                <button className='p-2 ml-2'><IoPlaySkipForwardSharp size={20} className='text-[#909090]/70' /></button>
                <button className='p-2 ml-2'><IoPlaySkipForwardSharp size={20} className='text-[#909090]' /></button>
            </div>

        </div>
    )
}

export default Player