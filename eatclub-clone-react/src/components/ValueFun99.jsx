import React from "react";
import { Link } from "react-router-dom";

export default function ValueFun99() {
    return (
        <div>
            <section class="menu-section">
        <h2>VALUE FUN PIZZA @ 99</h2>
        <p>Made with 100% real dairy cheese. 0% Mayonnaise. Pocket friendly pizzas, at just ₹99.</p>

        <div class="card-container">
            {/* <!-- Spicy Jalapeno --> */}
            <div class="pizza-card">
                <Link to='/cart'>
                <img src="https://assets.box8.co.in/rectangle-19x10/xhdpi/product/8074" alt="Spicy Jalapeno Pizza" />
                </Link>
                <div class="imgcontent">
                    <h3><img class="vegsignlogo"
                            src="https://d203x0tuwp1vfo.cloudfront.net/20250721102651/veg.d530555baa33bbcb.svg" alt=""/>
                        Golden Corn Pizza [Regular 7"]</h3>
                    <p>Golden Corn with Mozzarella & Molten Cheese. 100% Dairy Cheese | 0% Mayonnaise</p>
                </div>
                <div class="price-add">
                    <span class="price">₹ 99 <del>₹ 195</del></span>
                    <Link to='/cart'>
                    <button class="add-btn">                        
                            ADD +
                    </button>
                    </Link>
                </div>
            </div>
            {/* <!-- Capsicum --> */}
            <div class="pizza-card">
                <img src="https://assets.box8.co.in/rectangle-19x10/xhdpi/product/8074" alt="Capsicum Pizza" />
                <div class="imgcontent">
                    <h3><img class="vegsignlogo"
                            src="https://d203x0tuwp1vfo.cloudfront.net/20250721102651/veg.d530555baa33bbcb.svg" alt=""/>
                        Golden Corn Pizza [Regular 7"]</h3>
                     <p>Tangy, Spicy Jalapenos with Mozzarella & Molten Cheese. 100% Dairy Cheese | 0% Mayonnaise</p>
                </div>
                <div class="price-add">
                    <span class="price">₹ 99 <del>₹ 195</del></span>
                    <button class="add-btn">ADD +</button>
                </div>
            </div>

            {/* <!-- Golden Corn --> */}
            <div class="pizza-card">
                <img src="https://assets.box8.co.in/rectangle-19x10/xhdpi/product/8074" alt="Golden Corn Pizza" />
                <div class="imgcontent">
                    <h3><img class="vegsignlogo"
                            src="https://d203x0tuwp1vfo.cloudfront.net/20250721102651/veg.d530555baa33bbcb.svg" alt=""/>
                        Golden Corn Pizza [Regular 7"]</h3>
                    <p>Golden Corn with Mozzarella & Molten Cheese. 100% Dairy Cheese | 0% Mayonnaise</p>
                </div>

                <div class="price-add">
                    <span class="price">₹ 99 <del>₹ 195</del></span>
                    <button class="add-btn">ADD +</button>
                </div>
            </div>

            {/* <!-- Capsicum --> */}
            <div class="pizza-card">
                <img src="https://assets.box8.co.in/rectangle-19x10/xhdpi/product/8074" alt="Capsicum Pizza" />
                <div class="imgcontent">
                    <h3><img class="vegsignlogo"
                            src="https://d203x0tuwp1vfo.cloudfront.net/20250721102651/veg.d530555baa33bbcb.svg" alt=""/>
                        Golden Corn Pizza [Regular 7"]</h3>
                     <p>Tangy, Spicy Jalapenos with Mozzarella & Molten Cheese. 100% Dairy Cheese | 0% Mayonnaise</p>
                </div>
                <div class="price-add">
                    <span class="price">₹ 99 <del>₹ 195</del></span>
                    <button class="add-btn">ADD +</button>
                </div>
            </div>
            {/* <!-- Golden Corn --> */}
            <div class="pizza-card">
                <img src="https://assets.box8.co.in/rectangle-19x10/xhdpi/product/8074" alt="Golden Corn Pizza" />
                <div class="imgcontent">
                    <h3><img class="vegsignlogo"
                            src="https://d203x0tuwp1vfo.cloudfront.net/20250721102651/veg.d530555baa33bbcb.svg" alt=""/>
                        Golden Corn Pizza [Regular 7"]</h3>
                    <p>Golden Corn with Mozzarella & Molten Cheese. 100% Dairy Cheese | 0% Mayonnaise</p>
                </div>

                <div class="price-add">
                    <span class="price">₹ 99 <del>₹ 195</del></span>
                    <button class="add-btn">ADD +</button>
                </div>
            </div>
            {/* <!-- Spicy Jalapeno --> */}
            <div class="pizza-card">
                <img src="https://assets.box8.co.in/rectangle-19x10/xhdpi/product/8074" alt="Spicy Jalapeno Pizza" />
                <div class="imgcontent">
                    <h3><img class="vegsignlogo"
                            src="https://d203x0tuwp1vfo.cloudfront.net/20250721102651/veg.d530555baa33bbcb.svg" alt=""/>
                        Golden Corn Pizza [Regular 7"]</h3>
                    <p>Golden Corn with Mozzarella & Molten Cheese. 100% Dairy Cheese | 0% Mayonnaise</p>
                </div>
                <div class="price-add">
                    <span class="price">₹ 99 <del>₹ 195</del></span>
                    <button class="add-btn">ADD +</button>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
}