import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
type Props = {
    children: React.ReactNode
}

const YTCarousel = ({children}:Props) => {
    return (
        <Carousel >
            <CarouselContent>
                {children}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default YTCarousel