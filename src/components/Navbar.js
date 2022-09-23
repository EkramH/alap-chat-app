import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase.init";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <span className="navbar__logo">Alap Chat</span>
      <div className="navbar__user">
        <img className="navbar__img" src={currentUser.photoURL} alt="" />
        <span className="nabvar__user">{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)} className="navbar__btn">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
