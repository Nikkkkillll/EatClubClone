// 
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
//Changes has to be made
export default function Cart() {
  const { id } = useParams(); // Get pizza ID from URL
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:5009/ValueFun99/${id}`)
        .then((res) => setPizza(res.data))
        .catch((err) => console.error("Error fetching pizza:", err));
    }
  }, [id]);

  if (!pizza) {
    return <p>Loading cart...</p>;
  }

  return (
    <div className="cart-container">
      {/* Header */}
      <div className="cart-header">
        <span>YOUR CART</span>
        <span className="item-count">1 ITEM | ₹{pizza.offerprice}</span>
      </div>

      {/* Item Details */}
      <div className="cart-item">
        <h3>{pizza.name}</h3>
        <div className="item-details">
          <div className="item-left">
            <span className="veg-icon"></span>
            <span className="item-name">{pizza.name}</span>
            <div className="customize-text">Tap to Customize</div>
          </div>
          <div className="item-right">
            <span className="item-price">₹ {pizza.offerprice}</span>
            <div className="quantity-box">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>
        </div>
      </div>

      {/* Coupon Section */}
      <div className="coupon-box">
        <span className="coupon-icon">⚙️</span>
        <span className="coupon-text">APPLY COUPON</span>
      </div>

      {/* Bill Details */}
      <div className="bill-section">
        <div className="bill-header">
          <strong>BILL DETAILS</strong>
          <span>⌄</span>
        </div>
        <div className="to-pay">
          <span>To Pay</span>
          <span>₹{pizza.offerprice}</span>
        </div>
        <button className="promo-button">
          Save Extra ₹136 with <strong>EatClub</strong> →
        </button>
      </div>
    </div>
  );
}
