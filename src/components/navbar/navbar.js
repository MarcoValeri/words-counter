import React from 'react';
import { Link } from 'react-router-dom';

// Import style file
import './navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li className="navbar-logo">Words Counter</li><br />
                <section className="navbar-item">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/seo'>SEO</Link></li>
                </section>
            </ul>
        </nav>
    )
}

export default Navbar;