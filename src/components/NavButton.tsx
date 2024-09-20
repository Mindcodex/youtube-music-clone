import React from 'react'
type Props = {
    name: string
    children: React.ReactNode
    sidebarIsClosed: boolean
}

const NavButton = ({ name, children, sidebarIsClosed }: Props) => {
    const applyStyles = sidebarIsClosed? "space-x-5 w-[224px] px-5 h-12" : "flex-col space-y-2 text-[10px] w-[56px] h-[65px] justify-center"

    return (
        <a href="#" className={"flex items-center text-gray-300 hover:bg-white/15 rounded-[8px] " + applyStyles }>
            {children}
            <span>{name}</span>
        </a>
    )
}

export { NavButton }