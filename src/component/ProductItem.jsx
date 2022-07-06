import React from "react";
import "../assets/scss/ProductItem.scss";
import carToAdd from "../assets/img/carrito.png";
const ProductItem = ({ product }) => {
  const [cart, setcart] = React.useState([]);
  const handleClick = () => {
    setcart([]);
    console.log("...Hola Mundo");
  };
  return (
    <>
      <div className="ProductItem">
        <img src={product.images[0]} alt={product.title} />
        <div className="product-info">
          <div>
            <p>{product.prece}</p>
            <p>{product.title}</p>
          </div>
          <figure onClick={handleClick}>
            <img src={carToAdd} alt="" />
            <div>+</div>
          </figure>
          {cart}
        </div>
      </div>
    </>
  );
};
export { ProductItem };
