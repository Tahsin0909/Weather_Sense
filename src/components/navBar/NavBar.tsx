import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
                        <img className='w-8 h-8 m-4' src="https://i.ibb.co/QDds3hW/burger-menu-9973890-removebg-preview.png" alt="" />
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <NavLink to={`/`} onClick={handleDrawer}
                            className={({ isActive, isPending }) => isActive ? "text-blue-700" : isPending ? "pending" : ""}>
                            Home
                        </NavLink>
                        <NavLink to={`/cityWether`} onClick={handleDrawer}
                            className={({ isActive, isPending }) => isActive ? "text-blue-700" : isPending ? "pending" : ""}>
                            City
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
                </div>
            </div>
        </div>
    );
};

export default NavBar;