import React, { useState } from "react";
import "./components.css";
import { db } from "../firebase.init";
import { collection, getDocs, query, where } from "firebase/firestore";

const Search = () => {
  const [user, setUser] = useState("");
  const [userName, setUserName] = useState(null);
  const [err, setErr] = useState(false);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", userName)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  return (
    <div className="search">
      <div className="search__form">
        <input
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      {err && <span>User not found!!!</span>}
      {user && (
        <div className="user__chat">
          <img src={user.photoURL} alt="" />
          <div className="user__info">
            <span>{user.displayName}</span>
            <p>Hi</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
