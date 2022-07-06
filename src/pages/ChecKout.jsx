import React from "react";
import "../assets/scss/ChecKout.scss";
const Checkout = () => {
  return (
    <>
      <div className="checkout">
        <div className="checkout-container">
          <h1 className="title">My Order</h1>
          <div className="Checkout-content">
            <div className="order">
              <p>
                <span>03.25.21</span>
                <span>2 articles</span>
              </p>
              <p>$56000</p>
            </div>
            <div className="shopping-cart">
              <figure>
                <img
                  src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="bike"
                />
              </figure>
              <p>Bike</p>
              <p>$30,00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { Checkout };
