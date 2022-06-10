import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "../containers/Layout";
import { Login } from "../containers/Login";
import { Home } from "../pages/Home";
import { NotFund } from "../pages/NotFund";
import { Checkout } from "../pages/ChecKout";
import { CreateAccount } from "../pages/CreateAccount";
import { RecoveryPassword } from "../containers/RecoveryPassword";

import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route
            path="/RecoveryPassword"
            element={<RecoveryPassword />}
          ></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/createAccount" element={<CreateAccount />}></Route>
          <Route path="*" element={<NotFund />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export { App };
