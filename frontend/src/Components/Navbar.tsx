import React from 'react'
import "../Styles/Navbar.scss"

function Navbar() {
    return (
        <div className="navbar">
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </div>
    );
}

export default Navbar;
