import React from "react";

const Register = () => {
  return (
    <div className="form__container">
      <div className="form__wrapper">
        <span className="form__logo">Alap Chat</span>
        <span className="form__title">Register</span>
        <form>
          <input type="text" name="name" id="Display Name" />
          <input type="email" name="email" id="Your Email" />
          <input type="password" name="password" id="Password" />
          <input type="file" />
          <button>Sign up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
