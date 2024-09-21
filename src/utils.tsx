import { GoHomeFill } from "react-icons/go";
import { MdOutlineExplore, MdOutlineLibraryMusic } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
type PageLinksInfo = {
    linkName: string,
    icon: React.ReactNode
    href: string
}
export type PageLinks = PageLinksInfo[]
export const pagesLinks:PageLinks = [
    {
        linkName: "Principal",
        icon: <GoHomeFill size={24} key="HomeIcon"/>,
        href: "/"
    },
    {
        linkName: "Explorar",
        icon:<MdOutlineExplore size={24} key="ExploreIcon"/>,
        href: "#"
    },
    {
        linkName: "Biblioteca",
        icon:<MdOutlineLibraryMusic size={24} key="LibraryMusicIcon"/>,
        "href": "#"
    },
    {
        linkName: "Actualizar",
        icon:<SiYoutubemusic size={24} key="YTMusicIcon"/>,
        href: "#"
    }
]
export  const rgbToHex = (r:number, g:number, b:number) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
}).join('')
