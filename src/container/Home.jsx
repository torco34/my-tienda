import React from "react";
import { Borrador } from "../components/Borrador";

import { UserContext, UseContextProvider } from "../context/useContext";

const Home = () => {
  return (
    <>
      <UseContextProvider>
        <Borrador />
      </UseContextProvider>
    </>
  );
};
export { Home };
