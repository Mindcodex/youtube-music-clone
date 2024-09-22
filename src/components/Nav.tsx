import { pagesLinks } from "@/utils";
import { NavButton } from "./NavButton";


export const Nav = ({ sidebarIsClosed }: { sidebarIsClosed: boolean }) => {
    return (
        <nav className="">
            {pagesLinks.map(pageLink => {
                return (
                    <NavButton sidebarIsClosed={sidebarIsClosed} name={pageLink.linkName} key={pageLink.linkName} href={pageLink.href}>
                        {pageLink.icon}
                    </NavButton>
                )
            })}
        </nav>
    )
}

