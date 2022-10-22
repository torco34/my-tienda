import React, { useContext } from "react";
import { ProductHom } from "./ProductHom";
import { AppContext } from "../context/AppContex";
function ProductsHombre() {
  const { state, addTocart } = useContext(AppContext);
  const { products } = state;
  return (
    <>
      {products.map((product) => (
        <ProductHom
          key={product.id}
          product={product}
          // handleAddToCart={handleAddToCart}
        />
      ))}
    </>
  );
}
export { ProductsHombre };
