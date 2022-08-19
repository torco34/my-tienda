import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../assets/scss/Header.scss";
import icmenu from "../assets/img/icon_menu.svg";
import logo from "../assets/img/logo.jpg";
import { Menu } from "./Menu";
import { MyOrder } from "../containers/MyOrder";
import { AppContext } from "../context/AppContext";

import carrito from "../assets/img/carrito.jpeg";
import { Input } from "./Input";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrden] = useState(false);
  const { state } = useContext(AppContext);
  const handleToggle = (e) => {
    setToggle(!toggle);
    console.log("...Hola Mundo");
    e.preventDefault();
  };

  return (
    <>
      <nav>
        <img src={icmenu} alt="menu" className="menu" />

        <div className="navbar-left">
          <img src={logo} alt="logo" className="nav-logo" />

          <ul>
            <Link to="/">All</Link>
            <Link to="/homeNew">HomeNew</Link>
            <Link to="/RecoveryPassword">Clothes</Link>
            <Link to="/no">Checkout</Link>
            <Link to="/createAccount">CreateAccont</Link>
            <Link to="/cv">Toys</Link>
            <Link to="/login">Contact</Link>
            <Input />
          </ul>
        </div>

        <div className="navbar-right">
          <ul>
            <li className="navbar-email" onClick={handleToggle}>
              iniciar sesion
            </li>
            <li
              className="navbar-shopping-cart"
              onClick={() => setToggleOrden(!toggleOrders)}
            >
              <img src={carrito} alt="shopping cart" />
              {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
            </li>
          </ul>
        </div>

        {toggle && <Menu />}
        {toggleOrders && <MyOrder />}
      </nav>
    </>
  );
};

export { Header };
