import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import cn from "clsx"

export const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "absolute flex touch-none select-none items-center group h-5 -top-2",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-[2px] group-hover:h-1 w-full grow overflow-hidden rounded-full bg-[#444]">
      <SliderPrimitive.Range className="absolute h-full bg-red-600" />
    </SliderPrimitive.Track>

    <SliderPrimitive.Thumb className="hidden group-hover:block h-3 w-3 bg-red-600 rounded-full border-2 border-red-600 ring-offset-red-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
))

Slider.displayName = SliderPrimitive.Root.displayName