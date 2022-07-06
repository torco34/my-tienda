import React, { useRef } from "react";
import "../assets/scss/Login.scss";
import { Link } from "react-router-dom";
import logo from "../assets/img/losos.svg";
const Login = () => {
  const form = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      usename: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(data);
  };
  return (
    <>
      <div className="login">
        <div className="login-container">
          <img src={logo} alt="logo" className="logo" />

          <form action="/" className="form" ref={form}>
            <label for="email" className="label">
              Email address
            </label>
            <input
              type="text"
              name="email"
              placeholder="platzi@example.cm"
              className="input input-email"
            />

            <label for="password" className="label">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="*********"
              className="input input-password"
            />

            <button
              type="submit"
              onClick={handleSubmit}
              className="primary-button login-button"
            >
              log in
            </button>
            <a href="/">Forgot my password</a>
          </form>

          <button className="secondary-button signup-button">Sign up</button>
        </div>
      </div>
    </>
  );
};
export { Login };
