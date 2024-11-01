"use client"
import { Slider } from '../Slider';
import { usePlayer } from './usePlayer';
import { PlayBackSettings } from "./PlayBackSettings";
import SongInfo from "./SongInfo";
import { PlayBack } from "./PlayBack";
import { FeedBackActions } from '../FeedBackActions/FeedBackActions';

const Player = () => {
    const { audioRef, currentMusic, currentTime, songDuration } = usePlayer()
    const { currentSong } = currentMusic

    return (
        <div className={`w-full h-[72px] justify-between bg-[#212121] group fixed bottom-0 z-10 sm:px-0 ${currentSong ? "flex" : "hidden"}`}>
            <audio ref={audioRef}/>
            <Slider
                value={[currentTime]}
                max={audioRef?.current?.duration ?? 0}
                min={0}
                onValueChange={(value) => {
                    const [newCurrentTime] = value
                    if (audioRef.current) audioRef.current.currentTime = newCurrentTime
                }} className='w-full absolute flex touch-none select-none items-center h-5 -top-2 ' />

            <div className='h-full flex justify-center items-center order-2 sm:-order-1 px-4 sm:px-0'>
                <PlayBack songTime = {[currentTime, songDuration]} />
            </div>
            <div className='flex h-full justify-center items-center px-4 sm:px-0'>
                <SongInfo />
                <FeedBackActions songInfo = {currentSong} />
            </div>
            <PlayBackSettings />
        </div>
    )
}

export default Player