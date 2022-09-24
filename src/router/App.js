import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "../container/Layout";
import { Home } from "../container/Home";
import { NotFund } from "../container/NotFund.jsx";
import { Information } from "../container/Information";
import { ChecKout } from "../container/ChecKout";
import { Payment } from "../container/Payment";
import { AppContext } from "../context/AppContex";
import { UseInitialState } from "../hooks/UseInitialState";

function App() {
  const initialState = UseInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/information" element={<Information />}></Route>
            <Route path="/checkout" element={<ChecKout />}></Route>
            <Route path="/payment" element={<Payment />}></Route>
            <Route path="*" element={<NotFund />}></Route>
          </Routes>
        </Layout>
      </Router>
    </AppContext.Provider>
  );
}

export { App };
