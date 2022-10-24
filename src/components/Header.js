import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import icmenu from "../assets/img/icon_menu.svg";
// import logo from "../assets/img/logo.jpg";

import "../assets/scss/Header.scss";
import { AppContext } from "../context/AppContex";
import { HeaderCelu } from "./HeaderCelu";
const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;
  const [show, setShow] = useState(true);
  const showComponent = () => {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  return (
    <>
      <nav className="container">
        <div className=" navbar-left">
          <img
            src={icmenu}
            alt="menu"
            onClick={showComponent}
            className="menu"
          />
          <ul>
            <Link to="/home">Todo</Link>
            <Link to="/ropaHombre">Ropa</Link>
            <Link to="/ace">Acesorios</Link>
            <Link to="/home">Calzados</Link>
            <Link to="/createAccount">Reloj</Link>
            <Link to="/cv">Muebles</Link>
            <Link to="/login">Comida</Link>
          </ul>
        </div>

        <div className="navbar-right">
          <ul>
            <li className="navbar-shopping-cart">
              <Link to="/checkout">
                <i className="fas fa-shopping-basket" />
              </Link>
              {cart.length > 0 && (
                <div className="header-alert">{cart.length}</div>
              )}
            </li>
          </ul>
        </div>
      </nav>

      {!show ? <HeaderCelu /> : ""}
    </>
  );
};
export { Header };
