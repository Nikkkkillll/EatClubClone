import React from "react";

function BulkOrder() {
    return (
        <div>
            <div className="bulk-wrapper">
                <div className="bluk-banner">
                    <img src="https://assets.box8.co.in/bulk_order_assets/bulk_order_web.jpg" alt="" />

                </div>
                <div className="bluk-form-container">
                    <h2>BULK ORDER REQUEST</h2>
                    <p className="bulk-sub-text">Once you submit your request, our team will reach out to you via WhatsApp or call
                        within 60 mins.
                    </p>

                    <form className="bulk-form">
                        <label className="bulk-label" for="name">Name</label>
                        <input className="input-field" type="text" id="name" name="name" placeholder="Enter your name" value="" />

                        <label className="bulk-label" for="mobile">Mobile</label>
                        <input className="input-field" type="tel" id="mobile" name="mobile" placeholder="Enter your mobile number"
                            value="" />

                        <label className="bulk-label" for="email">Email</label>
                        <input className="input-field" type="email" id="email" name="email" placeholder="Enter your email" value="" />

                        <label className="bulk-label">No. of People</label>
                        <div className="radio-group">
                            <label><input type="radio" name="people" value="20-40" /> 20–40</label>
                            <label><input type="radio" name="people" value="40-60" /> 40–60</label>
                            <label><input type="radio" name="people" value="60+" /> 60+</label>
                        </div>

                        <button className="bulk-btn" type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BulkOrder;