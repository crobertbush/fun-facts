import React from 'react'

const Navbar = () => {
  return (
    <nav className="nav-wrapper green darken-3">
        <div className="container">
            <a href="/" className="brand-logo">Strange Animal Facts</a>
            <ul className="right">
                <li><a href="/">Home</a></li>
                <li><a href="/axolotl">Axolotl</a></li>
                <li><a href="/aye-aye">Aye-aye</a></li>
                <li><a href="/platypus">Platypus</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar