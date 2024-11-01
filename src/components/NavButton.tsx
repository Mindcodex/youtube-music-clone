"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
type Props = {
    name: string
    children: React.ReactNode
    sidebarIsClosed: boolean
    href:string
}

const NavButton = ({ name, children, sidebarIsClosed, href }: Props) => {
    const applyStyles = sidebarIsClosed? "space-x-5 w-[224px] px-5 h-12" : "flex-col space-y-1 text-[10px] w-[56px] h-[65px] justify-center"
    const pathName = usePathname()
    const isActive = pathName === href;
    return (
        <Link href={href} className={ `flex items-center text-gray-300 hover:bg-white/15 rounded-[8px] ${isActive? "bg-white/10" : ""} ` + applyStyles }>
            {children}
            <span>{name}</span>
        </Link>
    )
}

export { NavButton }