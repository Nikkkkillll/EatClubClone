import React from "react";

function Offer() {
    return (
        <div>
            <section className="MainSection">
                <div className="container">
                    <div className="tabs">
                        <button className="tab active">All Offers</button>
                        <button className="tab">Flat OFF</button>
                        <button className="tab">Payment Partners</button>
                    </div>

                    <h3 className="heading">All Offers</h3>

                    <div className="offers">
                        <div className="offer-card">
                            <img src="https://assets.codepen.io/123574/umbrella.png" alt="Umbrella" className="offer-image" />
                            <div className="offer-details">
                                <h3>Free Umbrella worth ₹300 - Eatclub Members</h3>
                                <p>Valid once/user</p>
                                <div className="coupon">
                                    <span><strong>Copy Code:</strong> UMBRELLACLUB</span>
                                    <button className="copy-btn">📋</button>
                                </div>
                            </div>
                        </div>

                        <div className="offer-card">
                            <img src="https://assets.codepen.io/123574/umbrella.png" alt="Umbrella" className="offer-image" />
                            <div className="offer-details">
                                <h3>Free Umbrella worth ₹300</h3>
                                <p>Valid once/user</p>
                                <div className="coupon">
                                    <span><strong>Copy Code:</strong> UMBRELLA</span>
                                    <button className="copy-btn">📋</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <h2 className="heading">Flat OFF</h2>

                    <div className="flat-off-container">
                        {/* <!-- Offer Card 1 --> */}
                        <div className="flat-off-card">
                            <div className="badge">🏷️</div>
                            <p className="user-type">For New Users</p>
                            <h3 className="offer-text">Flat ₹150 OFF<br />on first 3 orders</h3>
                            <div className="code-box">WELCOME3</div>
                        </div>

                        {/* <!-- Offer Card 2 --> */}
                        <div className="flat-off-card">
                            <div className="badge">🏷️</div>
                            <p className="user-type">For All Users</p>
                            <h3 className="offer-text">Get Free<br />Delivery</h3>
                            <div className="code-box">FREEDEL</div>
                        </div>

                        {/* <!-- Offer Card 3 --> */}
                        <div className="flat-off-card">
                            <div className="badge">🏷️</div>
                            <p className="user-type">For All Users</p>
                            <h3 className="offer-text">Flat 50% OFF<br />upto ₹100</h3>
                            <div className="code-box">EC50</div>
                        </div>
                    </div>

                </div>
                <div className="container">

                    <h2 className="heading">Payment Partners</h2>
                    <p className="subtext">Discount auto-applies upon payment</p>

                    <div className="partner-container">
                        {/* <!-- Card 1 --> */}
                        <div className="partner-card">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Cred_logo.svg/512px-Cred_logo.svg.png"
                                alt="CRED" className="partner-logo" />
                            <div className="partner-details">
                                <h3>Upto ₹250 Cashback</h3>
                                <p>Valid on top of all offers</p>
                                <span className="validity">VALIDITY: 31 JUL 2025</span>
                            </div>
                            <span className="arrow">›</span>
                        </div>

                        {/* <!-- Card 2 --> */}
                        <div className="partner-card">
                            <img src="https://seeklogo.com/images/L/lazypay-logo-7359C55E3C-seeklogo.com.png" alt="LazyPay"
                             className="partner-logo" />
                            <div className="partner-details">
                                <h3>Assured ₹20-150 Cashback</h3>
                                <p>Valid on top of all offers</p>
                                <span className="validity">VALIDITY: 31 JUL 2025</span>
                            </div>
                            <span className="arrow">›</span>
                        </div>

                        {/* <!-- Card 3 --> */}
                        <div className="partner-card">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Paytm_logo.svg/2560px-Paytm_logo.svg.png"
                                alt="Paytm" className="partner-logo" />
                            <div className="partner-details">
                                <h3>Flat ₹10 Cashback</h3>
                                <p>Valid once/user on top of all offers</p>
                                <span className="validity">VALIDITY: 31 JUL 2025</span>
                            </div>
                            <span className="arrow">›</span>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Offer;