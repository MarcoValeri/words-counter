import React from 'react';

// Import style file
import './footer.scss';

const Footer = () => {

    // Set variables for print out the current year
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className="footer">
            <p>Made with <span className="footer-heart">&hearts;</span> in London by Marco Valeri - &copy; {year} - All rights reserved</p>
        </footer>
    )
}

export default Footer;