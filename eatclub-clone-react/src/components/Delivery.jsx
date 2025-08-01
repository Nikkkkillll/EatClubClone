import React from "react";

export default function Delivery() {
    return (
        <div>
            <section class="sectiondelivery">


                <div class="deliverycontainer">
                    <h2>Delivery Orders</h2>
                    <p>Delivery orders are accepted if the following criteria are met:</p>
                    <ul>
                        <li>The customer’s delivery location falls within the permitted delivery zone of the designated outlet.</li>
                        <li>The delivery address being mapped to the nearest outlet that delivers in the customer's delivery location.
                        </li>
                        <li>Online availability of the outlet to accept and process the order.</li>
                        <li>In the event, the customer’s delivery location is not listed within the permitted delivery zone of the
                            outlet,
                            the order cannot be placed. However, you may choose to pick up your order from the nearest outlet.</li>
                    </ul>

                    <hr />

                    <h2>Menu</h2>
                    <ul>
                        <li>The products on the menu are displayed as per their availability in the selected outlet.</li>
                        <li>If certain items are not listed on the menu, it is because the particular outlet does not serve those items.
                        </li>
                        <li>In case of non-availability of ordered menu items at the selected outlet, the order will not be executed
                            &amp;
                            this will be duly informed to the customer.</li>
                    </ul>
                    <h2>Delivery Orders & Coupon Codes</h2>
                    <p>The customer may use the coupon codes mentioned in any of EatClub’s print material, promotional emails, & SMS
                        messages only while placing an order via the app or website.</p>
                    <ul>
                        <li>In order to avail the discount, the customer must enter the complete & accurate coupon code in the coupon
                            section on the payment page before completing the transaction.</li>
                        <li>The coupon codes are never case sensitive.
                        </li>
                        <li>The coupon code may not work if the conditions defined in the coupon T&C are not met.</li>
                        <li>Please confirm the T&C from the offers page or refer to the SMS/Email or other source where you received the
                            coupon code.</li>
                    </ul>

                    <hr />

                    <h2>Terms & Conditions for all coupons including printed, mobile and email coupons</h2>
                    <ul>
                        <li>A coupon/promotion cannot be clubbed with any other offer or scheme.</li>
                        <li>Only one coupon is valid per order.
                        </li>
                        <li>Coupons are only valid on the EatClub mobile app & website.</li>
                        <li>The customer must announce the coupon & coupon code while placing the order.</li>
                        <li>The customer must cut and hand over the coupon to the delivery person when they receive the order.</li>
                    </ul>
                    <h2>Modify/Cancel the online order</h2>
                    <ul>
                        <li>Orders once placed cannot be modified or cancelled either online or by the call center.</li>
                        <li>The customer can check on the progress of the order by tracking it on the app/web.
                        </li>
                        <li>In the event an order which is paid via credit card is cancelled due to the non-availability of the ordered
                            product, the amount will be refunded to the customer. The transaction will reflect in the next month’s
                            statement.</li>

                        <li>The food is for immediate consumption only (within 30 minutes of time of delivery).</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}