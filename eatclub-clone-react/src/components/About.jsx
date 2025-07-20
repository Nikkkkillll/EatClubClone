import React from "react";
import banner from '../image/about-banner.png'; 

export default function About() {
    return (
        <div>
            <section>
                <div class="about-banner">
                    <img src={banner} alt="" />
                </div>
                <div class="about-content">
                    <div class="about-content-p">
                        <p>Getting food delivered at home is always a great idea. But the whole episode of scrolling endlessly,
                            scanning restaurant ratings, hunting for coupon codes...now that’s not fun at all. So, here’s the
                            smarter way out with EatClub!</p>
                        <p>A membership program that takes you straight to a no-nonsense, curated selection of restaurants. Get
                            unlimited savings with 30% OFF every time on all restaurants and NO extra charges on delivery,
                            packaging or surge.</p>
                        <p>One membership, many benefits!</p>

                        <div class="about-btn-gb">
                            <span>Go back & check our menu </span>
                        </div>

                    </div>


                </div>
            </section>
        </div>
    )
}