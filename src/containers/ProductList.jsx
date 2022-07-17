import React from "react";
import { ProductItem } from "../component/ProductItem";
import "../assets/scss/ProductList.scss";
import { UseGetProduct } from "../hooks/useGetProduct";
const API = "http://api.escuelajs.co/api/v1/products";

const ProductList = () => {
  const products = UseGetProduct(API);
  return (
    <>
      <section className="main-container">
        <div className="ProductList">
          {products.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </div>
      </section>
    </>
  );
};
export { ProductList };
