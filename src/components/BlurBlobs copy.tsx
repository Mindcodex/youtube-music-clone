type Props = {
    color: string
}

export const BlurBlobs = ({color}:Props) => {
  return (
    <div className="absolute -z-10 w-full h-screen top-0 left-0 overflow-hidden ">
     
        <div style={{background: color}} className={"w-[50vw] h-[10vh] rounded-full  blur-[180px] relative left-0 top-0 "} ></div>
        <div style={{background: color}} className="w-[540px] h-[10vh] rounded-full -z-10 blur-[180px] absolute -right-[200px] top-0" ></div>
     
    </div>
  )
}

