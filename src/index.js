import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/global.scss";
import { App } from "./router/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
