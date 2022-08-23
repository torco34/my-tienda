import React from "react";
import "../assets/scss/Informacion.scss";
import { Link } from "react-router-dom";
const Information = () => {
  return (
    <>
      <div className="Information alert alert-success container">
        <div className="Information-content">
          <div className="Information-head">
            <h2>Informacion de contacto:</h2>
          </div>
          <div className="Information-form">
            <form action="">
              <input type="text" placeholder="Nombre completo" name="name" />
              <input
                type="text"
                placeholder="Correo Electronico"
                name="email"
              />
              <input type="text" placeholder="Direccion" name="address" />
              <input type="text" placeholder="Apto" name="apto" />
              <input type="text" placeholder="Ciudad" name="city" />
              <input type="text" placeholder="Pais" name="country" />
              <input type="text" placeholder="Estado" name="state" />
              <input type="text" placeholder="Codigo postal" name="cp" />
              <input type="text" placeholder="Telefono" name="phone" />
            </form>
          </div>
          <div className="Information-buttons">
            <Link to="/checkout">Regresar</Link>
            <div className="Information-back"></div>
            <div className="Information-next">
              <Link to="/payment">pagar</Link>
            </div>
          </div>
        </div>
        <div className="Information-sidebar">
          <h3>Pedido:</h3>
          <div className="Information-item">
            <div className="Information-element">
              <h4>ITEM Name</h4>
              <span>$10</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { Information };
