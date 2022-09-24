import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/scss/Payment.scss";

import { AppContext } from "../context/AppContex";
import { App } from "../components/App";
const Payment = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;
  const [paidFor, setPaidFor] = useState(false);

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <>
      <div className=" container Payment">
        <div className="Payment-content">
          <h3>Resumen del pedido:</h3>
          {cart.map((product, index) => (
            <div key={index} className="Payment-item bg-info">
              <div className="Payment-element">
                <h4>{product.title}</h4>
                <span>{product.price}</span>
              </div>
            </div>
          ))}
          {cart.length > 0 ? (
            <h3>{`Total: ${handleSumTotal(cart)}`}</h3>
          ) : (
            <></>
          )}
          <div className="Payment-button ">
            <App />
            Este es mi boton....
          </div>
        </div>
        <div />
      </div>
    </>
  );
};
export { Payment };
