import React from "react";

const Message = () => {
  return (
    <div className="message owner-message">
      <div className="message__info">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="message__content">
        <p>Hello</p>
        <img
          src="https://i.pinimg.com/originals/70/54/e7/7054e7423fb639362cd6b196115d43ef.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
