import React from 'react'
import { Slider } from '../Slider'
import { usePlayer } from './usePlayer'
import { BiVolumeFull, BiVolumeMute } from 'react-icons/bi'
import { IoPlaySkipForwardSharp } from 'react-icons/io5'
import { Repeat, RepeatOne } from '../Icons'

export const PlayBackSettings = () => {   
    const { volume, setVolume, isVolumeSilenced, handleRepeat, handleClickVolume, isRepeat, isRepeatOne } = usePlayer()
    return (
        <div data-volume className='h-full hidden justify-center items-center mr-1 sm:hidden lg:flex '>
            <div className=' relative transition-opacity flex opacity-0 items-center peer group-hover:opacity-100' >
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
            <button className='p-2 ml-2 relative flex gap-x-5 ' onClick={handleClickVolume}>
                {isVolumeSilenced ? <BiVolumeMute size={20} className='text-[#909090]' /> : <BiVolumeFull size={20} className='text-[#909090]' />}
            </button>
            <button onClick={handleRepeat} className='p-2 ml-2'> {isRepeatOne ? <RepeatOne color='#fff' size={24} className='text-white w-6 h-6' /> : <Repeat size={20} className={isRepeat ? "text-[#fff]" : 'text-[#909090]'} />}</button>
            <button className='p-2 ml-2'><IoPlaySkipForwardSharp size={20} className='text-[#909090]' /></button>
            <button className='p-2 ml-2'><IoPlaySkipForwardSharp size={20} className='text-[#909090]' /></button>
        </div>
    )
}

