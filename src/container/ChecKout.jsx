import React from "react";
import { Link } from "react-router-dom";
// import "../assets/scss/ChecKout.scs";
const ChecKout = () => {
  return (
    <>
      <div className="container  alert alert-success  ">
        <div className="row">
          <div className="col-6">
            <div className="text-center ">
              <h3>Lista de pedidos</h3>

              <h4>item name</h4>
            </div>
          </div>
          <div className="col-6  text-center">
            <div className="">
              <h3>Precio Total: $200</h3>
              <span>$10</span>

              <button type="button" className="btn btn-success m-4 ">
                <i className="fas fa-trash-alt " />
              </button>

              <Link to="/information">
                <button type="button" className="btn btn-success ">
                  continuar pedido
                </button>
                s
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { ChecKout };
