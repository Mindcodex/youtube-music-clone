"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi 
} from "@/components/ui/carousel"
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import { useRef, useState } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { playlists } from '@/lib/data';
import SongCard from './SongCard';

type Props = {
    title: string
    user?: boolean
}



export const YTMusicSlider = ({ title, user = false }: Props) => {
    const showUser = user ? "block" : "hidden"
    const [api, setApi] = useState<CarouselApi>()
    const next = () => {
        api?.scrollNext()
    };
    const previous = () => {
        api?.scrollPrev()

    };
    return (
        <section className="pt-4 xl:pt-8 mb-16 lg:mb-36 w-full" >
            <section className="flex justify-between w-full items-end">
                <div className="flex justify-between w-full items-end">
                    <div className="flex items-center">
                        <div className={"w-14 h-14 rounded-full bg-white/25 mr-4 hidden lg:block " + showUser}>
                            <img src="/profile.jpg" alt="profile" className='w-14 h-14 rounded-full' />
                        </div>
                        <section className="flex flex-col">
                            <h4 className={showUser + " hidden lg:block"}>JOHN DOE</h4>
                            <h2 className="lg:text-[34px] font-bold text-[24px]">{title}</h2>
                        </section>
                    </div>
                    <button className={" w-fit h-fit py-1 px-4 rounded-full border border-[#ccc] mr-3 hidden lg:block " + showUser}>Más</button>
                </div>
                <div className="flex items-end gap-x-3 text-[#ccc]">
                    <button className=" w-fit h-fit p-2 rounded-full border border-[#fff]/20" onClick={previous}  ><MdChevronLeft /></button>
                    <button className=" w-fit h-fit p-2 rounded-full border border-[#fff]/20" onClick={next} ><MdChevronRight /></button>
                </div>
            </section>
            <Carousel opts={
                {
                    slidesToScroll: 2
                }
            } setApi={setApi} >
                <CarouselContent>
                    {playlists.map((playlist) =>
                        <CarouselItem className="lg:basis-1/6">
                            <SongCard artists={playlist.artists} key={playlist.title} cover={playlist.cover} name={playlist.title} type='album' id={playlist.albumId} />
                        </CarouselItem>
                    )}
                </CarouselContent>
      
            </Carousel>

            {/* <Slick ref={$sliderRef} {...settings} className=''  >
                    {playlists.map((playlist) =>

                        <SongCard artists={playlist.artists} key={playlist.title} cover={playlist.cover} name={playlist.title} type='album' id={playlist.albumId} />

                    )}
                </Slick> */}
        </section >
    )
}