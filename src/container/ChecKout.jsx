import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ItemChecKout } from "../components/ItemChecKout";
import { AppContext } from "../context/AppContex";

import "../assets/scss/ChecKout.scss";
const ChecKout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;
  const handleRemove = (product) => () => {
    removeFromCart(product);
  };
  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };
  return (
    <>
      <div className="container  alert alert-success  ">
        <div className="row">
          <div className="checkout p-4 ">
            <div className=" text-center">
              {cart.length > 0 ? (
                <h3>Lista de pedidos</h3>
              ) : (
                <h3>Sin pedido</h3>
              )}
              {cart.map((item) => (
                <ItemChecKout
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  handleRemove={handleRemove(item)}
                />
              ))}
            </div>
            <div className="totalCheckout text-center p-3">
              {cart.length > 0 && (
                <div>
                  <h4>Precio Total $ ${handleSumTotal()}</h4>
                  <Link to="/information">
                    <button type="button" className="btn btn-success ">
                      continuar pedido
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { ChecKout };
