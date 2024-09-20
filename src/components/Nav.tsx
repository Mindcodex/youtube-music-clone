import { pagesLinks } from "@/utils";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineExplore, MdOutlineLibraryMusic } from "react-icons/md";
import { NavButton } from "./NavButton";


export const Nav = ({ sidebarIsClosed }: { sidebarIsClosed: boolean }) => {
    return (
        <nav className="space-y-4">
            {pagesLinks.map(pageLink => {
                return (
                    <NavButton sidebarIsClosed={sidebarIsClosed} name={pageLink.linkName} key={pageLink.linkName}>
                        {pageLink.icon}
                    </NavButton>
                )
            })}
        </nav>
    )
}

