import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import cn from "clsx"


interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  colorScheme?: 'red' | 'white' | 'green'; 
}

export const Slider: React.FC<SliderProps> = ({ className, colorScheme = 'red', ...props }) => {
  return (
    <SliderPrimitive.Root
      className={cn(
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track tabIndex={0} className="relative h-[2px] group-hover:h-1 w-full grow overflow-hidden rounded-full bg-[#444] focus:h-[2px]">
  
        <SliderPrimitive.Range className={cn(
          "absolute h-full",
          colorScheme === 'red' && ' bg-gradient-to-r from-[#ff0033] to-[#ff268e] from-80% cursor-pointer',
          colorScheme === 'white' && 'bg-white',
          colorScheme === 'green' && 'bg-green-600'
        )} />
      </SliderPrimitive.Track>

      <SliderPrimitive.Thumb className={cn(
        " cursor-pointer hidden group-hover:block active:h-5 active:w-5 h-[14px] w-[14px]  rounded-full border-2 ring-offset-[#ff0033] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        colorScheme === 'red' && 'bg-[#ff0033] border-[#ff0033] focus-visible:ring-[#ff0033]',
        colorScheme === 'white' && 'bg-white border-white focus-visible:ring-white',
        colorScheme === 'green' && 'bg-green-600 border-green-600 focus-visible:ring-green-600'
      )} />
    </SliderPrimitive.Root>
  );
};



Slider.displayName = SliderPrimitive.Root.displayName