import React, { useContext } from "react";
import { AppContext } from "../context/AppContex";
import "../assets/scss/ChecKout.scss";
const ItemChecKout = ({ title, price, handleRemove }) => {
  const { state, removeFromCart } = useContext(AppContext);

  return (
    <>
      <div className=" border border-info ">
        <div className="">
          <h3>{title}</h3>
          <span>${price}</span>
        </div>
        <button
          type="button"
          className="btn btn-success m-4 "
          onClick={handleRemove}
        >
          <i className="fas fa-trash-alt " />
        </button>
      </div>
    </>
  );
};

export { ItemChecKout };
