import React, { useContext } from "react";
import "../assets/scss/OrderItem.scss";
import cerrar from "../assets/img/cerrar.png";
import { AppContext } from "../context/AppContext";
const OrderItem = ({ product }) => {
  const { removerFromCart } = useContext(AppContext);
  const handleRemove = (product) => {
    removerFromCart(product);
  };
  return (
    <>
      <div className="OrderItem border">
        <figure>
          <img src={product.images[0]} alt={product.title} />
        </figure>
        <p>{product.title}</p>
        <p>${product.price}</p>
        <img src={cerrar} onClick={() => handleRemove(product)} alt="fle" />
      </div>
    </>
  );
};
export { OrderItem };
