import React from "react";
import { ProductItem } from "../component/ProductItem";
import "../assets/scss/ProductList.scss";
import { UseGetProduct } from "../hooks/useGetProduct";
const API = "http://api.escuelajs.co/api/v1/products";

const ProductList = () => {
  const products = UseGetProduct(API);
  console.log(products);
  const [value, setValue] = React.useState("");
  let apiProducts = [];
  if (!value.length >= 1) {
    apiProducts = products;
    console.log(apiProducts);
  } else {
    apiProducts = products.filter((product) => {
      const todoText = product.toLowerCase();
      const valueText = value.toLowerCase();
      return todoText.includes(valueText);
    });
    console.log(apiProducts);
  }
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
