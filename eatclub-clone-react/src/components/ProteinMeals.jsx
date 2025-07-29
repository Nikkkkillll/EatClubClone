import React from "react";
import { Link } from "react-router-dom";

function ProteinMeals(valuelist) {
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
                                <span className="price">₹{value.discount_price} <del>₹{value.original_price}</del></span>
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
                <h2>WEFIT PROTEIN BOWLS</h2>
                <p>Wholesome bowls full of proteins, with a good mix of greens, seeds & topped with delicious dressings!</p>

                <div className="card-container">
                    {renderList(valuelist)}
                </div>
            </section>
        </div>
    );
}

export default ProteinMeals;




