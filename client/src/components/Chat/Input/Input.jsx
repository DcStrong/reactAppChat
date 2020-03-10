import React from 'react';

//Компонент отвечающий за форму ввода сообщения, принимает 3 параметра из Chat.jsx. Вызывает созданную
//функцию sendMessage, с помощью setMessage, мы сразу вписываем значение в массив message (файл Chat) значение value

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
  </form>
)

export default Input;