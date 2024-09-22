import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { IoIosSearch } from "react-icons/io";
import { FaChromecast } from "react-icons/fa";
import { YTMusicSlider } from "./YTMusicSlider";
import Sidebar from "./Sidebar";
import { MUSIC_FILTERS } from "../constants";
import Player from "./Player";
import { BlurBlobs } from "./BlurBlobs";


export const YTMusic = () => {

  return (
    <div className="flex  text-white w-full h-full relative">
      <BlurBlobs img={"/banner.png"} color="a" />
      <main className="pt-[66px] md:px-14 lg:px-[98.5px] w-full md:ml-[72px] px-8 sm:overflow-hidden" >
        <section className="flex items-center space-x-[12px] mb-6 mt-6 xl:pt-10 pt-5 overflow-hidden">
          {MUSIC_FILTERS.map((category:string) => (
            <Button key={category} className="whitespace-nowrap bg-white/15 hover:bg-white/20 sm:h-9">
              {category}
            </Button>
          ))}
        </section>
        <YTMusicSlider title="Volver a escuchar" user />
      </main>
      
    </div>
  )
}