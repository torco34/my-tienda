import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { Link, useNavigate } from "react-router-dom";
import "../styles/components/Payment.css";
import { handleSumTotal } from "../utils";
import { PayPalButtons } from "@paypal/react-paypal-js";
const Payment = () => {
  const {
    state: { cart },
  } = useContext(AppContext);
  const [paidFor, setPaidFor] = useState(false);

  const handleApprove = (orderID) => {
    setPaidFor(true);
  };

  const history = useNavigate();
  if (paidFor) {
    history("/checkout/success");
  }
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((product, index) => (
          <div key={index} className="Payment-item">
            <div className="Payment-element">
              <h4>{product.title}</h4>
              <span>{product.price}</span>
            </div>
          </div>
        ))}
        {cart.length > 0 ? <h3>{`Total: ${handleSumTotal(cart)}`}</h3> : <></>}
        <div className="Payment-button" id="payment-button-container">
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: handleSumTotal(cart),
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                const name = details.payer.name.given_name;
                handleApprove(data.orderID);
              });
            }}
          />
        </div>
      </div>
      <div />
    </div>
  );
};

export default Payment;
