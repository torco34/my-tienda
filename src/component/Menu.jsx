import React from "react";
import "../assets/scss/Menu.scss";
const Menu = () => {
  return (
    <>
      <div className="Menu">
        <ul>
          <li>
            <a href="/" className="title">
              My orders
            </a>
          </li>
          <li>
            <a href="/">My account</a>
          </li>
          <li>
            <a href="/">Sign out</a>
          </li>
        </ul>
      </div>
    </>
  );
};
export { Menu };
