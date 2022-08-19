import React from "react";
import { Header } from "../component/Header";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
export { Layout };
