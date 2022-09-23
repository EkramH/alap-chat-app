import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase.init";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="navbar__logo">Alap Chat</span>
      <div className="navbar__user">
        <img
          className="navbar__img"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt=""
        />
        <span className="nabvar__user">Ekram</span>
        <button onClick={() => signOut(auth)} className="navbar__btn">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
