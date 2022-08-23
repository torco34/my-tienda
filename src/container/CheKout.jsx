import React from "react";

const ChecKout = () => {
  return (
    <>
      <div className="container">
        <h3>Lista de pedidos</h3>
        <div className="chackout-item">
          <div className="checkout-element">
            <h4>item name</h4>
            <span>$10</span>
          </div>
          <button type="button">Eliminar</button>
        </div>
      </div>
      <div className="checkout-sidebar">
        <h3>Precio Total: $200</h3>
        <button type="button">continuar pedido</button>
      </div>
    </>
  );
};
export { ChecKout };
