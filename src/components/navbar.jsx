import React from "react";
import {Link} from 'react-router-dom'

export const Navbar = () => {

    return (
        <div className="navbar">
            <div className="title">
                <h1>Anna's Bookshop</h1>
            </div>

            <div className="links">
                <Link to="/">Shop</Link>
                <Link to="/cart">Cart</Link>
            </div>
        </div>
    )
}