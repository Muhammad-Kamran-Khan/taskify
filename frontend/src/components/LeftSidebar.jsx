import React from 'react'
import IconStopwatch from "../icons/IconStopwatch";
import IconCheck from "../icons/IconCheck";
import IconFileCheck from "../icons/IconFileCheck";
import IconGrid from "../icons/IconGrid";
import IconDeleteAll from '../icons/IconDeleteAll';

import { useLocation, Link } from 'react-router-dom'
import { useUserContext } from '../context/userContext'

const MiniSidebar = () => {

    const location = useLocation();
    const pathName = location.pathname;
    

    const getStrokeColor = (link) => {
        return pathName === link ? "#3aafae" : "#71717a";
    }
    const navItems = [
        {
            icon: <IconGrid strokeColor={getStrokeColor("/")} />,
            title: "All",
            link: "/",
        },
        {
            icon: <IconFileCheck strokeColor={getStrokeColor("/completed")} />,
            title: "Completed",
            link: "/completed",
        },
        {
            icon: <IconCheck strokeColor={getStrokeColor("/pending")} />,
            title: "Pending",
            link: "/pending",
        },
        {
            icon: <IconStopwatch strokeColor={getStrokeColor("/overdue")} />,
            title: "Overdue",
            link: "/overdue",
        },
    ]
    return (
        <div className="basis-[5rem] flex flex-col bg-[#f9f9f9]">
            <div className="flex items-center justify-center h-[5rem]">
                {/* use public folder asset; if logo is inside src, adjust path accordingly */}
                <img src="/vite.svg" width={28} height={28} alt="logo" />
            </div>

            <div className="mt-8 flex-1 flex flex-col items-center justify-between">
                <ul className="flex flex-col gap-10">
                    {navItems.map((item, index) => (
                        <li key={index} className="relative group">
                            <Link to={item.link} aria-label={item.title}>
                                {item.icon}
                            </Link>

                            {/* Hover Tooltip */}
                            <span className="u-triangle absolute top-[50%] translate-y-[-50%] left-8 text-xs pointer-events-none text-white bg-[#3aafae] px-2 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {item.title}
                            </span>
                        </li>
                    ))}
                </ul>
                <div className="mb-[1.5rem]">
                    <button className="w-12 h-12 flex justify-center items-center border-2 border-[#EB4E31]  p-2 rounded-full">
                        <IconDeleteAll strokeColor="#EB4E31" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MiniSidebar