import React from 'react'
import CardWidget from './CardWidget'

const Navbar = () => {
  return (
    <nav className='nav'>
        <a className="header__link" href="./index.html">CD Store</a>
        <a className="header__link" href="./index.html">Vinyl Store</a>
        <a className="header__link" href="./index.html">Contact Us</a>
        <CardWidget/>
    </nav>
  )
}

export default Navbar