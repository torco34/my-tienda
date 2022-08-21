import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import icmenu from "../assets/img/icon_menu.svg";
import logo from "../assets/img/logo.jpg";
import carrito from "../assets/img/carrito.jpeg";
import "../assets/scss/Header.scss";

const Header = () => {
  return (
    <>
      <nav>
        <img src={logo} alt="logo" className="nav-logo" />
        <div className="container navbar-left">
          <img src={icmenu} alt="menu" className="menu" />
          <ul>
            <Link to="/">Todo</Link>
            <Link to="/ropa">Ropa</Link>
            <Link to="/#">Acesorios</Link>
            <Link to="/no">Calzados</Link>
            <Link to="/createAccount">Reloj</Link>
            <Link to="/cv">Muebles</Link>
            <Link to="/login">Comida</Link>
          </ul>
        </div>

        <div className="navbar-right">
          <ul>
            <li className="navbar-email">iniciar sesion</li>
            <li
              className="navbar-shopping-cart"
              //   onClick={() => setToggleOrden(!toggleOrders)}
            >
              <img src={carrito} alt="shopping cart" />
              {/* {state.cart.length > 0 ? <div>{state.cart.length}</div> : null} */}
            </li>
          </ul>
        </div>

        {/* {toggle && <Menu />} */}
        {/* {toggleOrders && <MyOrder />} */}
      </nav>
    </>
  );
};
export { Header };
