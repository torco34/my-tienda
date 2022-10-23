import React, { useContext } from "react";
import { Link } from "react-router-dom";
import icmenu from "../assets/img/icon_menu.svg";
// import logo from "../assets/img/logo.jpg";

import "../assets/scss/Header.scss";
import { AppContext } from "../context/AppContex";
import { HeaderCelu } from "./HeaderCelu";
const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;
  return (
    <>
      <nav className="container">
        {/* <img src={logo} alt="logo" className="" /> */}
        <div className=" navbar-left">
          <img src={icmenu} alt="menu" className="menu" />
          <ul>
            <Link to="/home">Todo</Link>
            <Link to="/ropaHombre">Ropa</Link>
            <Link to="/ace">Acesorios</Link>
            <Link to="/no">Calzados</Link>
            <Link to="/createAccount">Reloj</Link>
            <Link to="/cv">Muebles</Link>
            <Link to="/login">Comida</Link>
          </ul>
        </div>

        <div className="navbar-right">
          <ul>
            {/* <p className="navbar-email">iniciar section</p> */}
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

        {/* {toggle && <Menu />} */}
        {/* {toggleOrders && <MyOrder />} */}
      </nav>
      <HeaderCelu />
    </>
  );
};
export { Header };
