import React from "react";
import { Link } from "react-router-dom";
import "../assets/scss/HeaderCelu.scss";
function HeaderCelu({ products }) {
  return (
    <div className="container navbar-celular">
      <div className="">
        {/* <img src={icmenu} alt="menu" className="menu" /> */}
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
    </div>
  );
}
export { HeaderCelu };
