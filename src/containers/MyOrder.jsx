import React from "react";
import "../assets/scss/MyOrder.scss";
import { OrderItem } from "../component/OrderItem";
import { AppContext } from "../context/AppContext";
import arrow from "../assets/img/flecha.png";
import { useContext } from "react";
const MyOrder = () => {
  const { state } = useContext(AppContext);
  const sumTotal = () => {
    const reducer = (accumalator, currentValue) =>
      accumalator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };
  return (
    <>
      <aside className="MyOrder">
        <div className="title-container">
          <img src={arrow} alt="arrow" />
          <p className="title">My orders</p>
        </div>
        <div className="my-order-content">
          {state.cart.map((product) => (
            <OrderItem product={product} key={`orderItem-${product.id}`} />
          ))}

          <div className="order">
            <p>
              <span>Total</span>
            </p>
            <p>${sumTotal()}</p>
          </div>
          <button className="primary-button">Checkout</button>
        </div>
      </aside>
    </>
  );
};
export { MyOrder };
