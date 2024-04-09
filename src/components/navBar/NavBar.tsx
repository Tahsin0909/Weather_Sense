import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { BiSolidCity } from "react-icons/bi";
const NavBar: React.FC = () => {
    // state for drawer toogle 
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    // drawer handle 
    const handleDrawer = () => {
        setIsDrawerOpen(false);
    }
    return (
        <div>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" checked={isDrawerOpen} onChange={() => setIsDrawerOpen(!isDrawerOpen)} className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="">
                        <img className='w-8 h-8 cursor-pointer' src="https://i.ibb.co/QDds3hW/burger-menu-9973890-removebg-preview.png" alt="menu Icon" />
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 md:w-80 w-[70vw] min-h-full glass text-white">
                        <img className='lg:w-72 md:w-60 w-48' src="https://i.ibb.co/g7XJL4B/Weather-1-removebg-preview.png" alt="weather sense logo" />
                        <hr />
                        {/* Sidebar content here */}
                        <ul className='flex flex-col gap-4 flex-grow  text-lg py-4' >
                            <NavLink to={`/`} onClick={handleDrawer}
                                className={({ isActive, isPending }) => isActive ? "text-blue-700" : isPending ? "pending" : ""}>
                                <div className='flex gap-1 items-center hover:animate-pulse'>
                                    <IoMdHome />
                                    Home
                                </div>
                            </NavLink>
                            <NavLink to={`/cityTable`} onClick={handleDrawer}
                                className={({ isActive, isPending }) => isActive ? "text-blue-700" : isPending ? "pending" : ""}>
                                <div className='flex gap-1 items-center hover:animate-pulse'>
                                    <BiSolidCity />
                                    City Table
                                </div>
                            </NavLink>
                            <NavLink to={`/favoriteCity`} onClick={handleDrawer}
                                className={({ isActive, isPending }) => isActive ? "text-blue-700" : isPending ? "pending" : ""}>
                                <div className='flex gap-1 items-center hover:animate-pulse'>
                                    <MdFavorite />
                                    Favorite City
                                </div>
                            </NavLink>
                            <NavLink to={`/history`} onClick={handleDrawer}
                                className={({ isActive, isPending }) => isActive ? "text-blue-700" : isPending ? "pending" : ""}>
                                <div className='flex gap-1 items-center hover:animate-pulse'>
                                    <FaHistory />
                                    History
                                </div>
                            </NavLink>
                        </ul>
                        <p>Copyright @2024 reserved by Tahsin Zaman</p>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;