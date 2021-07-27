import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/Leadup21-page/Eng-Mobile/Join-prime_1500x150_PC_dayOf_Eng.jpg"
                    alt=""
                    className="checkout_ad" />

                <div className="checkout_title">
                    <h2>Your Shopping Basket</h2>
                </div>
            </div>

            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
