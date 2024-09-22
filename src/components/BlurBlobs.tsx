type Props = {
  color: string
  img: string
  blur?: boolean
}

export const BlurBlobs = ({ img, blur = false }: Props) => {
  return (
    <>
      <div className="absolute w-full h-[100vh]  bg-gradient-to-b from-[#030303]/60 to-[#030303] to-70% -z-10 top-0 left-0"></div>
      <div className={`absolute -z-20 w-full h-[49vh] top-0 left-0 overflow-hidden ${blur? "blur-[80px]" :""} `}>
        <picture className="w-full ">
          <img src={img} className=" object-cover h-full w-full" alt="background-gradient" />
        </picture>
      </div>
    </>
  )
}

