"use client"
import { Playlist, Song } from '@/lib/data';
import { createContext, useState } from 'react';
interface Music {
    playlist?: Playlist, 
    song?: Song, 
    songs?: Song[]
}
type SongData = {
    isPlaying: boolean,
    currentMusic: Music,
    volume: number,
    setVolume: (volume:number) => void,
    setIsPlaying: (isPlaying: boolean) => void,
    setCurrentMusic: (currentMusic:Music) => void,
}

const def:SongData = {
    isPlaying: false,
    currentMusic: {},
    volume: 1,
    setCurrentMusic: ()=> {},
    setVolume: ()=> {},
    setIsPlaying: ()=> {},
}

export const SongContext = createContext<SongData>(def)

export const SongProvider = ({ children }: { children: React.ReactNode }) => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [currentMusic, setCurrentMusic] = useState<Music>({})
    const [volume, setVolume] = useState(1)
    return (
        <SongContext.Provider value={ {currentMusic, isPlaying, setIsPlaying, setCurrentMusic, volume, setVolume } }>
            {children}
        </SongContext.Provider>
    )
}