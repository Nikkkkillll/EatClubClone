import React from "react";
import { Link } from "react-router-dom";

function WhatNew(valuelist) {
    const renderList = ({ valuelist }) => {
        if (valuelist) {
            return valuelist.map((value) => {
                return (
                    <div >
                        {/* <!-- Spicy Jalapeno --> */}
                        <div key={value.id} className="pizza-card">
                            <Link to='/cart'>
                                <img src={value.img} alt={value.title} />
                            </Link>
                            <div className="imgcontent">
                                <h3><img className="vegsignlogo"
                                    src={value.indiimg} alt={value.title} />
                                    {value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                            <div className="price-add">
                                <span className="price">₹{value.discounted_price} <del>₹{value.price}</del></span>
                                <Link to='/cart'>
                                    <button className="add-btn">
                                        ADD +
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }
    return (
        <div>
            <section className="menu-section">
                <h2>WHATSNEW</h2>
                <p>Here are all the new & exciting dishes you must try!</p>

                <div className="card-container">
                    {renderList(valuelist)}
                </div>
            </section>
        </div>
    );
}

export default WhatNew;




