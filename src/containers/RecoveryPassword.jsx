import React from "react";
import { Link } from "react-router-dom";
import "../scss/RecoveryPassword.scss";
const RecoveryPassword = () => {
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

          <h1 className="title">Email has been sent!</h1>
          <p className="subtitle">
            Please check your inbox for instructions on how to reset the
            password
          </p>

          <div className="email-image">
            <img src="./icons/email.svg" alt="email" />
          </div>

          <button className="primary-button login-button">Login</button>

          <p className="resend">
            <span>Didn't receive the email?</span>
            <a href="/">Resend</a>
          </p>
        </div>
      </div>
    </>
  );
};
export { RecoveryPassword };
