import React from "react";
import "./pages.css";

const Login = () => {
  return (
    <div className="form__container">
      <div className="form__wrapper">
        <span className="form__logo">Alap Chat</span>
        <span className="form__title">Login</span>
        <form className="form__box">
          <input type="email" name="email" placeholder="Your Email" />
          <input type="password" name="password" placeholder="Password" />
          <button className="form__btn">Sign in</button>
        </form>
        <p>You don't have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;
