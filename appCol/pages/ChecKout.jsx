import React from "react";
import "../assets/scss/ChecKout.scss";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import { Order } from "../component/Order";
import cerrar from "../assets/img/cerrar.png";
const Checkout = (props) => {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumalator, currentValue) =>
      accumalator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <>
      <div className="container-flad ">
        <div className="imgOpen">
          <img src={cerrar} onClick={props.handleRemove} alt="fle" />
        </div>
        <div className="col-3  checkout-container">
          <div className="">
            <h2 className="title">My Order</h2>
          </div>
        </div>
        <div className="col-5">
          <div className="">
            {state.cart.map((product) => (
              <Order product={product} key={product.id} />
            ))}

            <div className="order">
              <p>
                <span>Total</span>
              </p>
              <p>${sumTotal()}</p>
            </div>
            <button className="primary-button">Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};
export { Checkout };
