"use client"
import { Playlist, Song } from '@/lib/data';
import { createContext, useState } from 'react';
import { songs } from '@/lib/data';
interface Music {
    currentPlaylistInfo?: Playlist, 
    currentSong?: Song, 
    currentPlaylistMusic?: Song[]
}
type SongData = {
    playlistMusic:Song[]
    isPlaying: boolean,
    currentMusic: Music,
    volume: number,
    isLiked: boolean,
    isDisliked: boolean,
    isRepeat: boolean,
    isRepeatOne: boolean,
    songIndex: number,
    currentTime: number,
    setVolume: (volume:number) => void,
    setIsPlaying: (isPlaying: boolean) => void,
    setCurrentMusic: (currentMusic:Music) => void,
    setIsLiked: (isLiked:boolean) => void,
    setIsDisliked: (isDisliked:boolean) => void,
    setPlaylistMusic: (music:Song[]) => void,
    setSongIndex: (music:number) => void,
    setIsRepeat: (music:boolean) => void,
    setIsRepeatOne: (music:boolean) => void,
    setCurrentTime: (time: number) => void
}

const def:SongData = {
    playlistMusic: songs,
    isPlaying: false,
    currentMusic: {},
    volume: 1,
    isLiked: false,
    isDisliked: false,
    isRepeat:false,
    isRepeatOne:false,
    songIndex: 0,
    currentTime: 0,
    setCurrentMusic: ()=> {},
    setVolume: ()=> {},
    setIsPlaying: ()=> {},
    setIsLiked: ()=> {},
    setIsDisliked: ()=> {},
    setPlaylistMusic: () => {},
    setIsRepeat: () => {},
    setIsRepeatOne: () => {},
    setSongIndex: () => {},
    setCurrentTime: () => {}
}

export const SongContext = createContext<SongData>(def)

export const SongProvider = ({ children }: { children: React.ReactNode }) => {
    const [playlistMusic, setPlaylistMusic] = useState(songs)
    const [currentTime, setCurrentTime] = useState(0)
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [currentMusic, setCurrentMusic] = useState<Music>({})
    const [isLiked, setIsLiked] = useState<boolean>(false)
    const [isDisliked, setIsDisliked] = useState<boolean>(false)
    const [volume, setVolume] = useState(1)
    const [songIndex, setSongIndex] = useState(0)
    const [isRepeat, setIsRepeat] = useState(false)
    const [isRepeatOne, setIsRepeatOne] = useState(false)
    return (
        <SongContext.Provider value={ {currentMusic, isPlaying, setIsPlaying, setCurrentMusic, volume, setVolume, isDisliked, isLiked, setIsDisliked, setIsLiked, playlistMusic, setPlaylistMusic, isRepeat, isRepeatOne, songIndex, setIsRepeat, setIsRepeatOne, setSongIndex, setCurrentTime, currentTime } }>
            {children}
        </SongContext.Provider>
    )
}