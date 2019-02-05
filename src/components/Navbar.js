import React from "react"

const Navbar = () => {
    return (
        <nav className="nav-wrapper teal darken-3">
            <div className="container">
                <a href="#" className="brand-logo left">Simple Blog</a>
                <ul className="right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar