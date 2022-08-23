import React from "react";
import "../assets/scss/Payment.scss";
const Payment = () => {
  return (
    <>
      <div className=" container alert alert-success Payment">
        <div className="Payment-content">
          <h3>Resument del pedido:</h3>
          <div className="Payment-button">Boton de pago con Paypal</div>
        </div>
        <div />
      </div>
    </>
  );
};
export { Payment };
