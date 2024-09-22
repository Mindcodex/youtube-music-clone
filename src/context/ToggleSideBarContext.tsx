"use client"
import { createContext, useState } from 'react';
type ToggleState = {
    isClosed: boolean,
    toggle: (state: boolean) => void
} 
export const ToggleSidebarContext = createContext<ToggleState>({
    isClosed: true,
    toggle: () => {}
});
export const ToggleProvider = ({ children }: { children: React.ReactNode }) => {
    const [closeBar, setCloseBar] = useState(false)
    return (
        <ToggleSidebarContext.Provider value={{
            isClosed: closeBar,
            toggle: setCloseBar
        }}>
            {children}
        </ToggleSidebarContext.Provider>
    )
}