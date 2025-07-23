import React from "react";

export default function Cart(){
    return(
        <div>
        <div class="cart-container">
    {/* <!-- Header --> */}
    <div class="cart-header">
      <span>YOUR CART</span>
      <span class="item-count">1 ITEM | Rs. 290</span>
    </div>

    {/* <!-- Item Details --> */}
    <div class="cart-item">
      <h3>Daily Kitchen- Homely Meals</h3>
      <div class="item-details">
        <div class="item-left">
          <span class="veg-icon"></span>
          <span class="item-name">Ghee Pav Bhaji</span>
          <div class="customize-text">Tap to Customize</div>
        </div>
        <div class="item-right">
          <span class="item-price">₹ 199</span>
          <div class="quantity-box">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Coupon Section --> */}
    <div class="coupon-box">
      <span class="coupon-icon">⚙️</span>
      <span class="coupon-text">APPLY COUPON</span>
    </div>

    {/* <!-- Bill Details --> */}
    <div class="bill-section">
      <div class="bill-header">
        <strong>BILL DETAILS</strong>
        <span>⌄</span>
      </div>
      <div class="to-pay">
        <span>To Pay</span>
        <span>₹290</span>
      </div>
      <button class="promo-button">
        Save Extra ₹136 with <strong>EatClub</strong> →
      </button>
    </div>
  </div>
        </div>
    )
}