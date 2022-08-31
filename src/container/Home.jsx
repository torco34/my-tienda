import React from "react";
import { Products } from "../components/Products";
import inicialstaste from "../inicialstaste";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Products products={inicialstaste.products} />
          </div>
        </div>
      </div>
    </>
  );
};
export { Home };
