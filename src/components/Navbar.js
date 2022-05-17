import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="nav-wrapper green darken-3">
        <div className="container">
            <a href="/" className="brand-logo">Strange Animal Facts</a>
            <ul className="right">
                <li><NavLink to="/">Home</NavLink></li>
                <li><Link to="/axolotl">Axolotl</Link></li>
                <li><Link to="/aye-aye">Aye-aye</Link></li>
                <li><Link to="/platypus">Platypus</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar