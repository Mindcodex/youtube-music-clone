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
    const [songIndex, setSongIndex] = useState(0)
    const audioRef = useRef<HTMLAudioElement>(null)
    const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic, volume, setVolume } = useContext(SongContext)
    const { song, playlist, songs } = currentMusic
    const previousVolumeRef = useRef(volume)

    const isVolumeSilenced = volume < 0.1

    const handleClickVolume = () => {
        if (isVolumeSilenced) {
            setVolume(previousVolumeRef.current)
        } else {
            previousVolumeRef.current = volume
            setVolume(0)
        }
    }
    const forward = () => {
        if (song && songs && songIndex < songs?.length - 1) {
            setCurrentMusic(
                {
                    song: songs[songIndex + 1],
                    playlist,
                    songs
                }
            )
            setSongIndex(songIndex + 1)
            setIsPlaying(true)
        }
        else return
    }
    const backward = () => {
        if (song && songs && songIndex > 0) {
            setCurrentMusic(
                {
                    song: songs[songIndex - 1],
                    playlist,
                    songs
                }
            )
            setSongIndex(songIndex - 1)
            setIsPlaying(true)
        }
        else return

    }
    const play = () => {
        setIsPlaying(!isPlaying)
    }
    useEffect(() => {
        isPlaying ?
            audioRef.current?.play() :
            audioRef.current?.pause()
    }, [isPlaying, songIndex])

    useEffect(() => {
        if (song && audioRef.current && isPlaying) {
            const src = `/music/${playlist?.id}/0${song.id}.mp3`
            audioRef.current.src = src
            audioRef.current.volume = volume
            audioRef.current.play()
            if (currentMusic.song) setSongIndex(currentMusic?.song?.id - 1)
        }
    }, [currentMusic])
    useEffect(() => {
        if (audioRef) audioRef?.current?.addEventListener('timeupdate', handleTimeUpdate)

        return () => {
            if (audioRef) audioRef.current?.removeEventListener('timeupdate', handleTimeUpdate)
        }
    }, [])
    useEffect(() => {
        if (audioRef.current) audioRef.current.volume = volume
    }, [volume])

    const handleTimeUpdate = () => {
        if (audioRef) setCurrentTime(audioRef.current?.currentTime ?? 0)
    }

    const formatTime = (time: number) => {
        if (time == null) return `0:00`
        if (time == undefined) return `0:00`
        if (time == 0) return `0:00`

        const seconds = Math.floor(time % 60)
        const minutes = Math.floor(time / 60)

        return `${minutes}:${seconds.toString().padStart(2, '0')}`
    }

    const duration: number = audioRef?.current?.duration && !Number.isNaN(audioRef?.current?.duration) ? audioRef?.current?.duration : 0


    return (
        <div className={`w-full h-[72px] justify-between bg-[#212121] group fixed bottom-0 z-10 sm:px-0 ${currentMusic.song?.id ? "flex" : "hidden"}`}>
            <Slider
                value={[currentTime]}
                max={audioRef?.current?.duration ?? 0}
                min={0}
                onValueChange={(value) => {
                    const [newCurrentTime] = value
                    if (audioRef.current) audioRef.current.currentTime = newCurrentTime
                }} className='w-full absolute flex touch-none select-none items-center h-5 -top-2 ' />

            <audio ref={audioRef} />
            <div className='h-full flex justify-center items-center order-2 sm:-order-1 px-4 sm:px-0'>
                <button className='p-2 ml-2 hidden sm:block' onClick={backward}><IoPlaySkipBackSharp size={20} className='text-[#fff]' /></button>
                <button onClick={play} className='p-2 ml-2'>
                    {isPlaying ? <IoPauseSharp size={36} className="text-[#fff]" /> : <IoPlaySharp size={36} className='text-[#fff]' />}
                </button>
                <button className='p-2 ml-2' onClick={forward}><IoPlaySkipForwardSharp size={20} className='text-[#fff]' /></button>
                <span className='hidden sm:block ml-2 mr-4 text-[12px] text-[#aaa]'>{formatTime(currentTime) ?? "0:00"} / {formatTime(duration)}</span>
            </div>
            <div className='flex h-full justify-center items-center px-4 sm:px-0'>
                <div className='w-10 h-10 rounded-[2px] bg-[#909090]'>
                    <img src={playlist?.cover} alt={playlist?.title} />
                </div>
                <section className='ml-4 mr-2 text-[12px] sm:text-base'>
                    <h4>{song?.title}</h4>
                    <h5 className='text-[#909090]'>{song?.artists[0]} <span className='hidden sm:inline'>• {playlist?.title} • 2024</span></h5>
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
            <div data-volume className='h-full hidden sm:flex justify-center items-center mr-1 '>
                <div  className=' relative transition-opacity flex opacity-0 items-center peer group-hover:opacity-100' >
                    <Slider
                        defaultValue={[100]}
                        max={100}
                        min={0}
                        value={[volume * 100]}
                        className="w-[68px] flex  touch-none select-none items-center group h-5 "
                        colorScheme='white'
                        onValueChange={(value) => {
                            const [newVolume] = value
                            const volumeValue = newVolume / 100
                            setVolume(volumeValue)
                        }}
                    />
                </div>
                <button  className='p-2 ml-2 relative flex gap-x-5 ' onClick={handleClickVolume}>
                    {isVolumeSilenced ? <BiVolumeMute size={20} className='text-[#909090]' /> : <BiVolumeFull size={20} className='text-[#909090]'/>}
                </button>
                <button className='p-2 ml-2'><RiRepeatLine size={20} className='text-[#909090]' /></button>
                <button className='p-2 ml-2'><IoPlaySkipForwardSharp size={20} className='text-[#909090]' /></button>
                <button className='p-2 ml-2'><IoPlaySkipForwardSharp size={20} className='text-[#909090]' /></button>
            </div>

        </div>
    )
}

export default Player