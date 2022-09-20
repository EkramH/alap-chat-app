import React from "react";
import "./components.css";
import img from "../assets/img.png";
import attach from "../assets/attach.png";

const Input = () => {
  return (
    <div className="input">
      <input
        className="input__text"
        type="text"
        placeholder="Type something..."
      />
      <div className="input__send">
        <img src={attach} alt="" />
        <input type="file" id="file" style={{ display: "none" }} />
        <label htmlFor="file">
          <img src={img} alt="" />
        </label>
        <button className="input__btn">Send</button>
      </div>
    </div>
  );
};

export default Input;
