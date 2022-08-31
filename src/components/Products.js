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
    <div className="Products-items ">
      <div className="row">
        <div className="Product-item">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export { Products };
