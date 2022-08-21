import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "../container/Layout";
// import { Home } from "../pages/Home";
// import { Login } from "../pages/Login";
import { Home } from "../container/Home";
// import { SendEmail } from "../pages/SendEmail";
// import { NewPassword } from "../pages/NewPassword";
// import { MyAccount } from "../pages/MyAccount";
// import { CreateAccount } from "../pages/CreateAccount";
// import { Checkout } from "../pages/ChecKout";
// import { Orders } from "../pages/Orders";
// import { RecoveryPassword } from "../containers/RecoveryPassword";
// import { NotFund } from "../pages/NotFund";
// import { AppContext } from "../context/AppContext";
// import { useInitialState } from "../hooks/useInicialState";

// import "./App.css";

function App() {
  //   const initialState = useInitialState();
  return (
    // <AppContext.Provider value={initialState}>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>

          {/* <Route path="/homeNew" element={<HomeNew />}></Route>
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
            <Route path="/Login" element={<Login />}></Route> */}
          {/* <Route path="*" element={<NotFund />}></Route> */}
        </Routes>
      </Layout>
    </Router>
    // </AppContext.Provider>
  );
}

export { App };
