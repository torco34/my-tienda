import React, { useContext } from "react";
import { UserContext } from "../context/useContext";
const Borrador = () => {
  const { nombre } = useContext(UserContext);
  return (
    <>
      <h1>
        Este es Borrador <br></br>
        {nombre}
      </h1>
    </>
  );
};
export { Borrador };
