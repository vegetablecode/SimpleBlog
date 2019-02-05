import React from "react"
import { NavLink, withRouter } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="nav-wrapper teal darken-3">
            <div className="container">
                <NavLink to="/" className="brand-logo left">Simple Blog</NavLink>
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)