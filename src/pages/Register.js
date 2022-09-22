import React from "react";
import "./pages.css";
import add from "../assets/addAvatar.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.init";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div className="form__container">
      <div className="form__wrapper">
        <span className="form__logo">Alap Chat</span>
        <span className="form__title">Register</span>
        <form onSubmit={handleRegister} className="form__box">
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
