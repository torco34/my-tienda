import React from "react";
import "../assets/scss/MyOrder.scss";
import { OrderItem } from "../component/OrderItem";
const MyOrder = () => {
  return (
    <>
      <aside className="MyOrder">
        <div className="title-container">
          <img src="./icons/flechita.svg" alt="arrow" />
          <p className="title">My order</p>
        </div>
        <div className="my-order-content">
          <OrderItem />
          <div className="order">
            <p>
              <span>Total</span>
            </p>
            <p>$560.00</p>
          </div>
          <button className="primary-button">Checkout</button>
        </div>
      </aside>
    </>
  );
};
export { MyOrder };
