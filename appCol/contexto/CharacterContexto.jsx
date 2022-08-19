import React, { createContext } from "react";

export const CharacterContexto = createContext();

// componente
export const CaracterContextoProvider = ({ children }) => {
  return (
    <>
      <CharacterContexto.Provider
        value={{
          nombre: "toto",
          apellido: "arias",
        }}
      >
        {children}
      </CharacterContexto.Provider>
    </>
  );
};
