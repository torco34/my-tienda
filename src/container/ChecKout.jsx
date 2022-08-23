import React from "react";
import { Link } from "react-router-dom";
import "../assets/scss/ChecKout.scss";
const ChecKout = () => {
  return (
    <>
      <div className="container Checkout alert alert-success">
        <div className="Checkout-item ">
          <h3>Lista de pedidos</h3>
          <div className="Checkout-element">
            <div className="">
              <h4>item name</h4>
              <span>$10</span>
            </div>
            <button type="button">Eliminar</button>
          </div>
        </div>
        <div className="Checkout-sidebar">
          <h3>Precio Total: $200</h3>
          <Link to="/information">
            <button type="button">continuar pedido</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export { ChecKout };
