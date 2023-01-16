import React from 'react'
import CardWidget from './CardWidget'
import { Link, NavLink } from "react-router-dom"

const Navbar = (props) => {

    const { isHeader, textLinkFooter, hrefLinkFooter } = props

    if (isHeader) {
        return (
            <nav className="nav">
                <NavLink className="header__link" to="/products/cd">CD Store</NavLink>
                <NavLink className="header__link" to="/products/vinyl">Vinyl Store</NavLink>
                <NavLink to="/cart">
                  <CardWidget/>
                </NavLink>
            </nav>
        )
    } else {
        return (
            <nav className="nav">
                <a href={hrefLinkFooter}>{textLinkFooter}</a>
            </nav>
        )
    }
}

export default Navbar