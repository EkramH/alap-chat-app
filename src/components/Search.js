import React from "react";
import "./components.css";

const Search = () => {
  return (
    <div className="search">
      <div className="search__form">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="user__chat">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt=""
        />
        <div className="user__info">
          <span>Ali</span>
          <p>Hi</p>
        </div>
      </div>
    </div>
  );
};

export default Search;
