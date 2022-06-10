import React from "react";
import "../styles/Login.scss";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <ul>
        <Link to="/">
          <p className="active"> Home</p>
        </Link>
        <Link to="/Login">
          <p> Layout</p>
        </Link>
        <Link to="/RecoveryPassword">
          <p>RecoveryPassword</p>
        </Link>
        <Link to="/Interviews">
          <p>Interviews</p>
        </Link>
        <Link to="/Podcast">
          <p>Podcast</p>
        </Link>
        <Link to="/Contact">
          <p>Contact</p>
        </Link>
      </ul>
      <div className="login">
        <div className="form-container">
          <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />

          <h1 className="title">Create a new password</h1>
          <p className="subtitle">un nuevo un ya lo tengo</p>

          <form action="/" className="form">
            <label for="password" className="label">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="*********"
              className="input input-password"
            />

            <label for="new-password" className="label">
              Password
            </label>
            <input
              type="password"
              id="new-password"
              placeholder="*********"
              className="input input-password"
            />

            <input
              type="submit"
              value="Confirm"
              className="primary-button login-button"
            />
          </form>
        </div>
      </div>
    </>
  );
};
export { Login };
