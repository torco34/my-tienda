import React, { createContext } from "react";

export const UserContext = createContext();

export const UseContextProvider = ({ children }) => {
  return (
    <UserContext.Provider
      value={{
        nombre: "toto",
        apellido: "arias",
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
