type Props = {
    color: string
}

export const BlurBlobs = ({color}:Props) => {

  return (
    <div className="absolute -z-10 w-full h-screen">
        <div style={{background: color}} className="w-[540px] h-[130px] rounded-full  blur-[180px] relative left-56 top-0" ></div>
        <div style={{background: color}} className="w-[540px] h-[130px] rounded-full -z-10 blur-[180px] absolute -right-[200px] top-0" ></div>
    </div>
  )
}

