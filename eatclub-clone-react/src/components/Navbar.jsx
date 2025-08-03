import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <div>
            <header className="header">
                <nav className="navbar">
                    <div className="nav-left">
                        <div className="eatclub-logo">
                            <Link to="/">
                            <img className="eatclub-logo-img" src="https://d203x0tuwp1vfo.cloudfront.net/20250718101024/assets/images/logo.png" alt="EatClub Logo"/>
                            </Link>
                            

                        </div>
                        <div className="search-bar">
                            <span><b>DELIVERY</b></span>
                            <span className="search-cont">Showing Default Location</span>
                            <i className="fa-solid fa-angle-down"></i>

                        </div>
                    </div>
                    <div className="navbar-right">
                        <Link to="/whyeatclub" className="nav-link">Why EatClub?</Link>
                        <div className="nav-link dropdown">
                            <span><img className="offer-logo" src="https://cdn-icons-png.flaticon.com/512/2956/2956869.png"
                                alt="offer icon" />Deals&nbsp;<i className="fa-solid fa-angle-down"></i></span>

                        </div>
                        <a href="#" className="nav-link"><i className="fa-solid fa-cart-shopping"></i>Cart</a>
                        <a href="#" className="btn-outline">Get the app</a>
                        <Link to="/signin" className="btn"><span>Sign in</span></Link>
                    </div>
                </nav>
            </header>
        </div>
    )
}