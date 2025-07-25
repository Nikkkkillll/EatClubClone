import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <main>
                <div className="banner">
                    <img src="https://assets.box8.co.in/horizontal-rectangle/web/banner/2516" alt=""/>
                </div>
                {/* <!-- Offer Container --> */}
                <div className="food-container">
                    <div className="offers-container">
                        <h2>Top offers today</h2>
                        <div className="offers">
                            <div className="offer-card">
                                <Link to='/value99'>
                                    <img src="https://assets.box8.co.in/horizontal-rectangle/web/banner/2396" alt=""/>
                                </Link>
                            </div>
                            <div className="offer-card">
                                <img src="https://assets.box8.co.in/horizontal-rectangle/web/banner/2390" alt=""/>
                            </div>
                            <div className="offer-card">
                                <img src="https://assets.box8.co.in/horizontal-rectangle/web/banner/2483" alt=""/>
                            </div>
                            <div className="offer-card">
                                <img src="https://assets.box8.co.in/horizontal-rectangle/web/banner/2397" alt=""/>
                            </div>
                            <div className="offer-card">
                                <img src="	https://assets.box8.co.in/horizontal-rectangle/web/banner/2400" alt=""/>
                            </div>
                            <div className="offer-card">
                                <img src="https://assets.box8.co.in/horizontal-rectangle/web/banner/2401" alt=""/>
                            </div>
                        </div>
                    </div>
                    <hr/>
                        {/* <!-- what on your mind container --> */}
                        <div className="whatonmind">
                            <h2>What’s on your mind?</h2>
                            <div className="category-scroll">
                                <div className="category">
                                    <img src="https://assets.box8.co.in/horizontal-rectangle/web/banner/2504" alt="Pizza"/>
                                        <p><span className="category-name">Pizza</span></p>
                                </div>
                                <div className="category">
                                    <img src="https://assets.box8.co.in/horizontal-rectangle/web/banner/2503" alt="Briyani"/>
                                        <p><span className="category-name">Briyani</span></p>
                                </div>
                                <div className="category">
                                    <img src="https://assets.box8.co.in/horizontal-rectangle/web/banner/2506" alt="Meal"/>
                                        <p><span className="category-name">Daily Meal</span></p>
                                </div>
                                <div className="category">
                                    <img src="https://assets.box8.co.in/horizontal-rectangle/web/banner/2500" alt="Bowl"/>
                                        <p><span className="category-name">Bowl</span></p>
                                </div>
                                <div className="category">
                                    <img src="https://assets.box8.co.in/horizontal-rectangle/web/banner/2505" alt="Thali"/>
                                        <p><span className="category-name">Thali</span></p>
                                </div>
                                <div className="category">
                                    <img src="https://assets.box8.co.in/horizontal-rectangle/web/banner/2498" alt="Thincurst"/>
                                        <p><span className="category-name">ThinCurst</span></p>
                                </div>
                                <div className="category">
                                    <img src="https://assets.box8.co.in/horizontal-rectangle/web/banner/2501" alt="Rolls"/>
                                        <p><span className="category-name">Rolls</span></p>
                                </div>
                                <div className="category">
                                    <img src="	https://assets.box8.co.in/horizontal-rectangle/web/banner/2507" alt="LigthMeal"/>
                                        <p><span className="category-name">Ligth Meal</span></p>
                                </div>
                                <div className="category">
                                    <img src="	https://assets.box8.co.in/horizontal-rectangle/web/banner/2502" alt="High Protein"/>
                                        <p><span className="category-name">High Protein</span></p>
                                </div>
                                <div className="category">
                                    <img src="	https://assets.box8.co.in/horizontal-rectangle/web/banner/2508" alt="Sandwich"/>
                                        <p><span className="category-name">Sandwich</span></p>
                                </div>
                            </div>
                            <hr/>
                        </div>
                </div>
                <div className="food-container2">
                    <div className="heading-restrurant">
                        <strong>Restaurants</strong>
                    </div>
                    {/* <!-- coontainer with first three container --> */}
                    <div className="restaurants-container">
                        <div className="membership-cart">
                            <img src="https://assets.box8.co.in/rectangle-19x10/web/brand/20_disabled" alt=""/>
                                <div className="membership-containt">
                                    <p className="membership-name">LeanCrust Pizza</p>
                                    <p className="membership-tagline">The Thin Crust Experts</p>
                                    <hr/>
                                        <div className="offer-contain">
                                            <img src="	https://eatclub.in/assets/images/offers_teal.svg" alt=""/><span
                                                className="offer-contain-tagline">30% Off + ZERO Extra Fees</span>
                                        </div>

                                </div>
                        </div>

                        <div className="membership-cart">
                            <img src="https://assets.box8.co.in/rectangle-19x10/web/brand/1" alt=""/>
                                <div className="membership-containt">
                                    <p className="membership-name">BOX8 - Desi Meals</p>
                                    <p className="membership-tagline">India’s Largest Desi Meals Brand</p>
                                    <hr/>
                                        <div className="offer-contain">
                                            <img src="	https://eatclub.in/assets/images/offers_teal.svg" alt=""/><span
                                                className="offer-contain-tagline">30% Off + ZERO Extra Fees</span>
                                        </div>

                                </div>
                        </div>

                        <div className="membership-cart">
                            <img src="	https://assets.box8.co.in/rectangle-19x10/web/brand/31_disabled" alt=""/>
                                <div className="membership-containt">
                                    <p className="membership-name">Daily Kitchen- Homely Meals</p>
                                    <p className="membership-tagline">Mom-Style Homely Meals That You Can Have Daily</p>
                                    <hr/>
                                        <div className="offer-contain">
                                            <img src="	https://eatclub.in/assets/images/offers_teal.svg" alt=""/><span
                                                className="offer-contain-tagline">30% Off + ZERO Extra Fees</span>
                                        </div>

                                </div>
                        </div>

                    </div>
                    {/* <!-- coontainer with 2nd three container--> */}
                    <div className="restaurants-container">
                        <div className="membership-cart">
                            <img src="https://assets.box8.co.in/rectangle-19x10/web/brand/37_disabled" alt=""/>
                                <div className="membership-containt">
                                    <p className="membership-name">The Ghee Khichdi Project</p>
                                    <p className="membership-tagline">Comforting, Wholesome & Made with 100% Pure Ghee</p>
                                    <hr/>
                                        <div className="offer-contain">
                                            <img src="	https://eatclub.in/assets/images/offers_teal.svg" alt=""/><span
                                                className="offer-contain-tagline">30% Off + ZERO Extra Fees</span>
                                        </div>

                                </div>
                        </div>

                        <div className="membership-cart">
                            <img src="https://assets.box8.co.in/rectangle-19x10/web/brand/22_disabled" alt=""/>
                                <div className="membership-containt">
                                    <p className="membership-name">ZAZA Mughal Biryani</p>
                                    <p className="membership-tagline">India's Most Flavourful Biryani</p>
                                    <hr/>
                                        <div className="offer-contain">
                                            <img src="	https://eatclub.in/assets/images/offers_teal.svg" alt=""/><span
                                                className="offer-contain-tagline">30% Off + ZERO Extra Fees</span>
                                        </div>

                                </div>
                        </div>

                        <div className="membership-cart">
                            <img src="https://assets.box8.co.in/rectangle-19x10/web/brand/13" alt=""/>
                                <div className="membership-containt">
                                    <p className="membership-name">MOJO Pizza- 2X Toppings</p>
                                    <p className="membership-tagline">India’s Highest Rated Pizza Delivery Chain</p>
                                    <hr/>
                                        <div className="offer-contain">
                                            <img src="	https://eatclub.in/assets/images/offers_teal.svg" alt=""/><span
                                                className="offer-contain-tagline">30% Off + ZERO Extra Fees</span>
                                        </div>

                                </div>
                        </div>

                    </div>

                    {/* <!-- coontainer with 3rd three container--> */}
                    <div className="restaurants-container">
                        <div className="membership-cart">
                            <img src="	https://assets.box8.co.in/rectangle-19x10/web/brand/16_disabled" alt=""/>
                                <div className="membership-containt">
                                    <p className="membership-name">NH1 Bowls</p>
                                    <p className="membership-tagline">Highway to North! Real North-Indian Taste.</p>
                                    <hr/>
                                        <div className="offer-contain">
                                            <img src="	https://eatclub.in/assets/images/offers_teal.svg" alt=""/><span
                                                className="offer-contain-tagline">30% Off + ZERO Extra Fees</span>
                                        </div>

                                </div>
                        </div>

                        <div className="membership-cart">
                            <img src="https://assets.box8.co.in/rectangle-19x10/web/brand/15_disabled" alt=""/>
                                <div className="membership-containt">
                                    <p className="membership-name">Mealful Rolls</p>
                                    <p className="membership-tagline">India's Biggest Rolls</p>
                                    <hr/>
                                        <div className="offer-contain">
                                            <img src="	https://eatclub.in/assets/images/offers_teal.svg" alt=""/><span
                                                className="offer-contain-tagline">30% Off + ZERO Extra Fees</span>
                                        </div>

                                </div>
                        </div>

                        <div className="membership-cart">
                            <img src="	https://assets.box8.co.in/rectangle-19x10/web/brand/26_disabled" alt=""/>
                                <div className="membership-containt">
                                    <p className="membership-name">BOOM Sandwich</p>
                                    <p className="membership-tagline">Sub Style Sandwiches, Freshly Made</p>
                                    <hr/>
                                        <div className="offer-contain">
                                            <img src="	https://eatclub.in/assets/images/offers_teal.svg" alt=""/><span
                                                className="offer-contain-tagline">30% Off + ZERO Extra Fees</span>
                                        </div>

                                </div>
                        </div>

                    </div>

                    {/* <!-- coontainer with 4th three container --> */}
                    <div className="restaurants-container">
                        <div className="membership-cart">
                            <img src="	https://assets.box8.co.in/rectangle-19x10/web/brand/25_disabled" alt=""/>
                                <div className="membership-containt">
                                    <p className="membership-name">WeFit - Protein Meals</p>
                                    <p className="membership-tagline">Upto 74 gm Protein in Bowls, Salads & Sandwiches</p>
                                    <hr/>
                                        <div className="offer-contain">
                                            <img src="	https://eatclub.in/assets/images/offers_teal.svg" alt=""/><span
                                                className="offer-contain-tagline">30% Off + ZERO Extra Fees</span>
                                        </div>

                                </div>
                        </div>

                        <div className="membership-cart">
                            <img src="https://assets.box8.co.in/rectangle-19x10/web/brand/27_disabled" alt=""/>
                                <div className="membership-containt">
                                    <p className="membership-name">Hola Pasta</p>
                                    <p className="membership-tagline">Fresh Gourmet Pasta.</p>
                                    <hr/>
                                        <div className="offer-contain">
                                            <img src="	https://eatclub.in/assets/images/offers_teal.svg" alt=""/><span
                                                className="offer-contain-tagline">30% Off + ZERO Extra Fees</span>
                                        </div>

                                </div>
                        </div>

                        <div className="membership-cart">
                            <img src="https://assets.box8.co.in/rectangle-19x10/web/brand/14_disabled" alt=""/>
                                <div className="membership-containt">
                                    <p className="membership-name">Itminaan Matka Biryani</p>
                                    <p className="membership-tagline">Slow Cooked & Served in an Earthen Matka</p>
                                    <hr/>
                                        <div className="offer-contain">
                                            <img src="	https://eatclub.in/assets/images/offers_teal.svg" alt=""/><span
                                                className="offer-contain-tagline">30% Off + ZERO Extra Fees</span>
                                        </div>

                                </div>
                        </div>

                    </div>
                    {/* <!-- coontainer with 5th three container--> */}
                    {/* <div className="restaurants-container">
                        <div className="membership-cart">
                            <img src="	https://assets.box8.co.in/rectangle-19x10/web/brand/24_disabled" alt=""/>
                                <div className="membership-containt">
                                    <p className="membership-name">Bhatti Chicken</p>
                                    <p className="membership-tagline">Grilled in a Bhatti, Not Fried</p>
                                    <hr/>
                                        <div className="offer-contain">
                                            <img src="	https://eatclub.in/assets/images/offers_teal.svg" alt=""/><span
                                                className="offer-contain-tagline">30% Off + ZERO Extra Fees</span>
                                        </div>

                                </div>
                        </div>

                    </div> */}

                </div>
            </main>
        </div>
    )


}