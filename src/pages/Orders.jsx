import React from "react";
import { OrderItem } from "../component/OrderItem";
import "../assets/scss/Orders.scss";
const Orders = () => {
  return (
    <>
      <div className="Orders">
        <div className="Orders-container">
          <h1 className="title">My orders [PEGES]</h1>
          <div className="Orders-content">
            <OrderItem />
          </div>
        </div>
      </div>
    </>
  );
};
export { Orders };
