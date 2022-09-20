import React from "react";
import "./components.css";
import cam from "../assets/cam.png";
import add from "../assets/add.png";
import more from "../assets/more.png";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__info">
        <span>Ekram</span>
        <div className="chat__icon">
          <img src={cam} alt="" />
          <img src={add} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
