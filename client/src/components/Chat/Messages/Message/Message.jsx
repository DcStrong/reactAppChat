import React from 'react';

import ReactEmoji from 'react-emoji';

import "./Message.css";

const Message = ({ message: { text } }) => {


  return (
        <div className="messageContainer justifyEnd">
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
  );
}

export default Message;