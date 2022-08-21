import React, { useContext } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { UserContext } from "../context/useContext";
const ContainerApp = () => {
  const { caracters } = useContext(UserContext);
  console.log(caracters, "este es un defac");

  return (
    <>
      <div className="row justify-content-center alert alert-success">
        <h1>
          Este es ContainerApp <br></br>
        </h1>
        {caracters.map((caracter) => {
          return (
            <>
              <div
                className=" col-ms-3 col-md-4 col-lg-3 m-3 card p-2"
                key={caracter.id}
              >
                <img
                  src={caracter.images}
                  className="card-img-top "
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{caracter.title}</h5>
                  <p className="card-text text-danger">$ {caracter.price}</p>
                  <a href="#" className="btn btn-success">
                    Agregar
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export { ContainerApp };
