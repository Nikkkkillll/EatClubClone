import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div>
            <div class="bannerabovefooter">
                <img src="	https://eatclub.in/assets/images/eatclub-download-banner.webp" alt="" />
            </div>
            <footer className="footer-dark">
                <div className="footer-content">
                    <div className="footer-about">
                        <h2>EatClub</h2>
                        <p>
                            Getting food delivered at home is always a great<br />
                            idea. But the whole episode of scrolling endlessly,<br />
                            scanning restaurant ratings, hunting for coupon<br />
                            codes... now that’s not fun at all. So, here’s the<br />
                            smarter way out with EatClub!
                        </p>
                        <p>
                            A membership program that takes you straight to a<br />
                            no-nonsense, curated selection of restaurants. Get <br />
                            unlimited savings with 30% OFF every time on all <br />
                            restaurants and NO extra charges on delivery, <br />
                            packaging or surge.
                        </p>
                        <p>One membership, many benefits!</p>
                    </div>

                    <div className="footer-column">
                        <h4>COMPANY</h4>
                        <ul>
                            <li><a href="#"><Link to="/about">About Us</Link></a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>GET HELP</h4>
                        <ul>
                            <li><a href="#"><Link to="/contactus">Contact us</Link></a></li>
                            <li><a href="#"><Link to="/help">Help & Support</Link></a></li>
                            <li><a href="#"><Link to="/deliverypolicies">Delivery Policies</Link></a></li>
                            <li><a href="#"><Link to="/privacypolicies">Privacy Policies</Link></a></li>
                            <li><a href="#"><Link to="/disclaimer">Disclaimers </Link></a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>EXPLORE</h4>
                        <ul>
                            <li><a href="#">Offers</a></li>
                            <li><a href="#">Bulk Order</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>Copyright 2020 - 2025. EatClub Brands Pvt. Ltd. All rights reserved. <span
                        className="version">v11.4.1-1</span></p>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}