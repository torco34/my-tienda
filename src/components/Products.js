import React, { useContext } from "react";
import { Product } from "./Product";
import "../assets/scss/Products.scss";
import { AppContext } from "../context/AppContex";
const Products = () => {
  const { state, addTocart } = useContext(AppContext);
  const { products } = state;
  const handleAddToCart = (Product) => () => {
    addTocart(Product);
    console.log("hola mundo");
  };
  return (
    <div className="product-item ">
      <div className="gridItem">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};
export { Products };
