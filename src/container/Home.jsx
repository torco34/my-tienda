import React from "react";
import { Products } from "../components/Products";
import inicialstaste from "../inicialstaste";
import "../assets/scss/global.scss";
const Home = () => {
  return (
    <>
      <div className="container saber">
        <div className="row">
          <div className="">
            <Products products={inicialstaste.products} />
          </div>
        </div>
      </div>
    </>
  );
};
export { Home };
