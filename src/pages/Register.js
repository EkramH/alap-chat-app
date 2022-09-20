import React from "react";
import "./pages.css";
import add from "../assets/addAvatar.png";

const Register = () => {
  return (
    <div className="form__container">
      <div className="form__wrapper">
        <span className="form__logo">Alap Chat</span>
        <span className="form__title">Register</span>
        <form className="form__box">
          <input type="text" name="name" placeholder="Display Name" />
          <input type="email" name="email" placeholder="Your Email" />
          <input type="password" name="password" placeholder="Password" />
          <input type="file" id="file" style={{ display: "none" }} />
          <label htmlFor="file">
            <img src={add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button className="form__btn">Sign up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
