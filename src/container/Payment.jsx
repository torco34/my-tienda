import React from "react";
import { Link } from "react-router-dom";
import "../assets/scss/Payment.scss";
const Payment = () => {
  return (
    <>
      <div className=" container alert alert-success Payment">
        <Link to="/">ONLINEshop</Link>
        <div className="Payment-content">
          <h3>Resument del pedido: 34000</h3>
          <div className="Payment-button btn btn-dark">
            Boton de pago con Paypal
          </div>
        </div>
        <div />
      </div>
    </>
  );
};
export { Payment };
