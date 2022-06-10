import React from "react";
import { Link } from "react-router-dom";
import "../scss/Header.scss";
const Header = () => {
  return (
    <>
      <nav>
        <img src="./icons/icon_menu.svg" alt="menu" className="menu" />

        <div className="navbar-left">
          <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />

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
            <li className="navbar-email">platzi@example.com</li>
            <li className="navbar-shopping-cart">
              <img src="./icons/icon_shopping_cart.svg" alt="shopping cart" />
              <div>2</div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export { Header };
