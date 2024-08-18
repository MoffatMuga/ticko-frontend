"use client"
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdHome } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { IoTicketOutline } from "react-icons/io5";
import { MdEventSeat } from "react-icons/md";
import { PiMoneyWavyThin } from "react-icons/pi";
import { MdLogout } from "react-icons/md";
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";

const LINKS = [
    { id: 0, name: 'Home', component: 'Home', icon: MdHome },
    { id: 1, name: 'Events', component: 'Events', icon: MdEventSeat },
    { id: 2, name: 'Tickets', component: 'Tickets', icon: IoTicketOutline },
    { id: 3, name: 'Users', component: 'Users', icon: HiMiniUserGroup },
    { id: 4, name: 'Payments', component: 'Payments', icon: PiMoneyWavyThin },
    { id: 5, name: 'Profile', component: 'Profile', icon: CiUser },
];

export default function SideBar({ setActiveComponent }) {
    const [activeLink, setActiveLink] = useState(0);

    const handleLinkClick = (index, component) => {
        setActiveLink(index);
        setActiveComponent(component);
    };

    const [user, setUser] = useState(null)
    const router = useRouter()

    useEffect(() => {

        const userData = JSON.parse(localStorage.getItem('user'))
        setUser(userData)

    }, [])

    const handleLogout = () => {
        const confirmLogout = window.confirm("Are you sure you want to log out?")
        if (confirmLogout) {
            localStorage.removeItem('user')
            localStorage.removeItem('token')
            router.push('login')
        }
    }

    return (
        <div>
            <div className="w-16 md:w-56 fixed left-0 top-0 z-10 h-screen border-r pt-2 px-4 bg-white ">
                <ul className='mt-6 space-y-6 '>
                    {LINKS.map((link, index) => (
                        <li
                            key={index}
                            className={`font-medium px-5 py-2 rounded-md hover:bg-gray-100 hover:text-secondary ${activeLink === index ? "bg-secondary text-white font-medium" : "bg-white"}`}
                        >
                            <a
                                className='flex justify-start items-center md:space-x-3 cursor-pointer'
                                onClick={() => handleLinkClick(index, link.component)}
                            >
                                <span>{link.icon()}</span>
                                <span className='text-sm text-black/60 hidden md:flex'>{link.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
                <div className='md:mt-[200px] mt-[450px] flex justify-start items-center md:space-x-3 font-medium px-5 py-2 rounded-md hover:bg-gray-100 hover:text-secondary cursor-pointer' onClick={handleLogout}>
                    <span><MdLogout /></span>
                    <span className='text-sm text-black/60 hidden md:flex'> Logout</span>
                </div>
            </div>
        </div>
    );
}
