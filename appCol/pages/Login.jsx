import React, { useRef } from "react";
import "../assets/scss/Login.scss";

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
        {/* <Order /> */}

        <div className="login-container">
          <form action="/" className="form" ref={form}>
            <label className="label">Email address</label>
            <input
              type="text"
              name="email"
              placeholder="platzi@example.cm"
              className="input input-email"
            />

            <label className="label">Password</label>
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
