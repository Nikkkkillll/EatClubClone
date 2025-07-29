import React from "react";
import { Link } from "react-router-dom";

function Store9(valuelist) {
    const renderList = ({ valuelist }) => {
        if (valuelist) {
            return valuelist.map((value) => {
                return (
                    <div >
                        {/* <!-- Spicy Jalapeno --> */}
                        <div key={value.id} className="pizza-card">
                            <Link to='/cart'>
                                <img src={value.img} alt={value.altname} />
                            </Link>
                            <div className="imgcontent">
                                <h3><img className="vegsignlogo"
                                    src={value.indiimg} alt={value.name} />
                                    {value.name}</h3>
                                <p>{value.description}</p>
                            </div>
                            <div className="price-add">
                                <span className="price">₹{value.offerprice} <del>₹{value.price}</del></span>
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
                <h2>₹99 STORE</h2>
                <p>Introducing our daily-changing menu! Choose from handpicked selections under this special menu, starting at just ₹99.</p>

                <div className="card-container">
                    {renderList(valuelist)}
                </div>
            </section>
        </div>
    );
}

export default Store9;




