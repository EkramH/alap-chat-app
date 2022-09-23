import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase.init";
import "./pages.css";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="form__container">
      <div className="form__wrapper">
        <span className="form__logo">Alap Chat</span>
        <span className="form__title">Login</span>
        <form onSubmit={handleLogin} className="form__box">
          <input type="email" name="email" placeholder="Your Email" />
          <input type="password" name="password" placeholder="Password" />
          <button className="form__btn">Sign in</button>
          {err && <span>Something went wrong! Try again.</span>}
        </form>
        <p>
          You don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
