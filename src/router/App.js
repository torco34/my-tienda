import React from "react";
import { UseContextProvider } from "../context/useContext.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "../container/Layout";
import { Home } from "../container/Home";
import { NotFund } from "../container/NotFund.jsx";

function App() {
  // const Provaider = UseContextProvider
  return (
    <UseContextProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>

            <Route path="*" element={<NotFund />}></Route>
          </Routes>
        </Layout>
      </Router>
    </UseContextProvider>
  );
}

export { App };
