import React, { useState, useEffect } from "react";
import io from "socket.io-client";

import Messages from './Messages/Messages';
import Input from './Input/Input';


let socket;

//Создаем два массива. Первый у нас устанавливает сообщение которое вводили в поле ввода.
//Второй принимает от сокета полеченое сообщение и создает из них массив всех сообщений

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "localhost:5000";
  socket = io(ENDPOINT);
  
  //Получаем текущее состояние элемента, каждый раз когда рендериться приложение. Принимаем событие с сервера
  // Принимаем один аргумент message.
  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message ]);
    });
  })

  //Функция срабатывает в компоненте Input на кнопке отправки, в качестве аргумента принимает event,
  //стандартный слушатель события. Проверяем message, если не пусто, отправляем событие socket.emit на сервер
  //А поле input делаем пустым с помощью setMessage('');
  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  
  //В компонент messages мы передаем массив из полученых сообщений и выводим на страницу
  return (
    <div className="outerContainer">
      <div className="container">
          <Messages messages={messages}/>
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  );
}

export default Chat;