import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <p>Sidebar</p>
            <Link to={'/cityWether'}>City</Link>
            <Link to={'/favoriteCity'}>Favorite</Link>
            <Link to={'/History'}>History</Link>
        </div>
    );
};

export default NavBar;