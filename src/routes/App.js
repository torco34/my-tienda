import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "../containers/Layout";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { PasswordRecovery } from "../pages/PasswordRecovery";
import { SendEmail } from "../pages/SendEmail";
import { NewPassword } from "../pages/NewPassword";
import { MyAccount } from "../pages/MyAccount";

import { CreateAccount } from "../pages/CreateAccount";
import { Checkout } from "../pages/ChecKout";

import { Orders } from "../pages/Orders";
import { RecoveryPassword } from "../containers/RecoveryPassword";
import { NotFund } from "../pages/NotFund";
import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>

          <Route
            path="/PasswordRecovery"
            element={<PasswordRecovery />}
          ></Route>
          <Route path="/SendEmail" element={<SendEmail />}></Route>
          <Route path="/NewPassword" element={<NewPassword />}></Route>
          <Route path="/MyAccount" element={<MyAccount />}></Route>
          <Route path="/createAccount" element={<CreateAccount />}></Route>
          <Route
            path="/RecoveryPassword"
            element={<RecoveryPassword />}
          ></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/Orders" element={<Orders />}></Route>

          <Route path="*" element={<NotFund />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export { App };
