import React from 'react';

import ReactEmoji from 'react-emoji';

import "./Message.css";

const Message = ({ message: { text }, name}) => {


  return (
        <div className="messageContainer justifyEnd">
          <div className="messageBox backgroundBlue">
            <p>{name}</p>
            <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
  );
}

export default Message;