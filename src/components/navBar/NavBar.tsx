import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FcHome } from "react-icons/fc";
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
                    <ul className="menu p-4 w-80 min-h-full glass text-white">
                        <img src="https://i.ibb.co/g7XJL4B/Weather-1-removebg-preview.png" alt="" />
                        <hr />
                        {/* Sidebar content here */}
                        <ul className='flex flex-col gap-4 flex-grow border-2 border-red-600 text-lg py-4' >
                            <NavLink to={`/`} onClick={handleDrawer}
                                className={({ isActive, isPending }) => isActive ? "text-blue-700" : isPending ? "pending" : ""}>
                                <FcHome /> Home
                            </NavLink>
                            <NavLink to={`/favoriteCity`} onClick={handleDrawer}
                                className={({ isActive, isPending }) => isActive ? "text-blue-700" : isPending ? "pending" : ""}>
                                Favorite
                            </NavLink>
                            <NavLink to={`/history`} onClick={handleDrawer}
                                className={({ isActive, isPending }) => isActive ? "text-blue-700" : isPending ? "pending" : ""}>
                                History
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