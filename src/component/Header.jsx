import React from "react";
import { Link } from "react-router-dom";
import "../assets/scss/Header.scss";
import icmenu from "../assets/img/icon_menu.svg";
import logo from "../assets/img/logo.jpg";
import { Menu } from "./Menu";
import carrito from "../assets/img/carrito.jpeg";

const Header = () => {
  const [toggle, setToggle] = React.useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
    console.log("...Hola Mundo");
  };
  return (
    <>
      <nav>
        <img src={icmenu} alt="menu" className="menu" />

        <div className="navbar-left">
          <img src={logo} alt="logo" className="nav-logo" />

          <ul>
            <Link to="/">All</Link>
            <Link to="/Login">Layout</Link>
            <Link to="/RecoveryPassword">Clothes</Link>
            <Link to="/Checkout">Checkout</Link>
            <Link to="/createAccount">CreateAccont</Link>
            <Link to="/">Toys</Link>
            <Link to="/Contact">Others</Link>
          </ul>
        </div>

        <div className="navbar-right">
          <ul>
            <li className="navbar-email" onClick={handleToggle}>
              platzi@example.com
            </li>
            <li className="navbar-shopping-cart">
              <img src={carrito} alt="shopping cart" />
              <div>2</div>
            </li>
          </ul>
        </div>
        {toggle && <Menu />}
      </nav>
    </>
  );
};

export { Header };
