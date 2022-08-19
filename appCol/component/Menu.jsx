import React from "react";
import { Link } from "react-router-dom";
import { Checkout } from "../pages/ChecKout";
import "../assets/scss/Menu.scss";
const Menu = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const handleToggle = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
  };
  const handleRemove = () => {
    console.log("hola mendo");
    setToggleMenu(false);
  };

  return (
    <>
      <div className="Menu">
        <ul>
          <li className="navbar-em" onClick={handleToggle}>
            <a href="/"> My orders</a>
          </li>

          <li>
            <Link to="/login">My account</Link>
          </li>
          <li>
            <a href="/">Sign out</a>
          </li>
        </ul>
      </div>

      {toggleMenu && <Checkout handleRemove={handleRemove} />}
    </>
  );
};
export { Menu };
