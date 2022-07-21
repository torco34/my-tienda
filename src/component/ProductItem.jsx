import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../assets/scss/ProductItem.scss";
import carToAddImg from "../assets/img/carrito.png";

const ProductItem = ({ product }) => {
  const { carToAdd } = useContext(AppContext);

  const handleClick = (item) => {
    carToAdd(item);
    console.log("...Hola Mundo");
  };
  return (
    <>
      <div className="ProductItem">
        product iten
        <img src={product.images[0]} alt={product.title} />
        <div className="product-info">
          <div className="OrderItem">
            <p>{product.price}</p>
            <p>{product.title}</p>
          </div>
          <figure onClick={() => handleClick(product)}>
            <img src={carToAddImg} alt="imagen" />
            {/* <div>+</div> */}
          </figure>
        </div>
      </div>
    </>
  );
};
export { ProductItem };
