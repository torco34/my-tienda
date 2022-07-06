import React from "react";
import flech from "../assets/img/flecha.png";
const Order = () => {
  return (
    <>
      <div className="Order">
        <p>
          <span>03.25.21</span>
          <span>6 articles</span>
        </p>
        <p>$560.00</p>
        <img src={flech} alt="arrow" />
      </div>
    </>
  );
};
export { Order };
