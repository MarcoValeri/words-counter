import React from 'react';

// Import style file
import './navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li className="navbar-logo">Words Counter</li>
            </ul>
        </nav>
    )
}

export default Navbar;